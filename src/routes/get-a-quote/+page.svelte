<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  type ClientType = 'residential' | 'commercial' | 'corporate' | 'event' | 'vip';
  
  let currentStep = $state(1);
  let isSubmitting = $state(false);
  let submitSuccess = $state(false);
  let referenceNumber = $state('');

  // Form data
  let formData = $state({
    clientType: '' as ClientType,
    services: [] as string[],
    propertyType: '',
    propertySize: '',
    accessPoints: '',
    existingSecurity: [] as string[],
    notes: '',
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    contactMethod: 'phone' as 'phone' | 'email' | 'whatsapp',
    contactTime: 'anytime' as 'morning' | 'afternoon' | 'anytime'
  });

  // Service options by client type
  const serviceOptions: Record<ClientType, string[]> = {
    residential: ['Manned Guarding', 'Armed Response', 'CCTV & Alarms', 'Dog Handling'],
    commercial: ['Manned Guarding', 'Armed Response', 'CCTV & Alarms', 'Access Control'],
    corporate: ['Manned Guarding', 'VIP Protection', 'Emergency Medical', 'CCTV & Alarms'],
    event: ['Event Security', 'Dog Handling', 'VIP Protection', 'Emergency Medical'],
    vip: ['VIP Protection', 'Armed Response']
  };

  // Validation
  let errors = $state<Record<string, string>>({});

  function validateStep(step: number): boolean {
    errors = {};

    if (step === 1) {
      if (!formData.clientType) {
        errors.clientType = 'Please select a client type';
      }
      if (formData.services.length === 0) {
        errors.services = 'Please select at least one service';
      }
    }

    if (step === 2) {
      if (!formData.propertyType) {
        errors.propertyType = 'Please select a property type';
      }
      if (!formData.propertySize) {
        errors.propertySize = 'Please select a property size';
      }
      if (!formData.accessPoints) {
        errors.accessPoints = 'Please select number of access points';
      }
    }

    if (step === 3) {
      if (!formData.fullName.trim()) {
        errors.fullName = 'Full name is required';
      }
      if (!formData.email.trim()) {
        errors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.email = 'Please enter a valid email address';
      }
      if (!formData.phone.trim()) {
        errors.phone = 'Phone number is required';
      } else if (!/^(\+27|0)[6-8][0-9]{8}$/.test(formData.phone.replace(/\s/g, ''))) {
        errors.phone = 'Please enter a valid SA phone number';
      }
    }

    return Object.keys(errors).length === 0;
  }

  function nextStep() {
    if (validateStep(currentStep)) {
      currentStep++;
    }
  }

  function prevStep() {
    if (currentStep > 1) {
      currentStep--;
    }
  }

  function toggleService(service: string) {
    const index = formData.services.indexOf(service);
    if (index > -1) {
      formData.services = formData.services.filter(s => s !== service);
    } else {
      formData.services = [...formData.services, service];
    }
  }

  function toggleExistingSecurity(item: string) {
    const index = formData.existingSecurity.indexOf(item);
    if (index > -1) {
      formData.existingSecurity = formData.existingSecurity.filter(s => s !== item);
    } else {
      formData.existingSecurity = [...formData.existingSecurity, item];
    }
  }

  async function submitForm() {
    if (!validateStep(3)) return;

    isSubmitting = true;

    try {
      const response = await fetch('/get-a-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        referenceNumber = result.reference;
        submitSuccess = true;
      } else {
        errors.form = result.error || 'Failed to submit quote request';
      }
    } catch (error) {
      errors.form = 'Network error. Please try again.';
    } finally {
      isSubmitting = false;
    }
  }

  const propertyTypes = ['House', 'Townhouse', 'Apartment', 'Office', 'Warehouse', 'Retail', 'Industrial', 'Estate', 'Other'];
  const propertySizes = ['< 500m²', '500–1000m²', '1000–5000m²', '> 5000m²'];
  const accessPointOptions = ['1', '2', '3', '4', '5+'];
  const existingSecurityOptions = ['Alarm system', 'CCTV cameras', 'Electric fence', 'Security gate', 'Armed response (other provider)', 'None'];
</script>

<svelte:head>
  <title>Get a Quote | Vision Tactical | Free Security Quote</title>
  <meta
    name="description"
    content="Get a free, no-obligation quote for your security needs. Quick and easy online quote request for residential and commercial security services."
  />
</svelte:head>

<div class="bg-[#09090B]">
  <!-- HERO SECTION -->
  <section class="relative py-24 md:py-32 overflow-hidden">
    <div class="glow-ambient glow-ambient-top"></div>
    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-3xl" use:reveal>
        <p class="overline mb-4">GET A QUOTE</p>
        <h1 class="heading-gradient text-4xl md:text-5xl font-bold mb-6">
          Request a Free Quote
        </h1>
        <p class="text-zinc-400 text-lg leading-relaxed">
          Tell us about your security needs and we'll provide a tailored 
          solution within 24 hours.
        </p>
      </div>
    </div>
  </section>

  <!-- QUOTE WIZARD -->
  <section class="pb-24">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto">
        <!-- Progress Steps -->
        <div class="mb-12" use:reveal>
          <div class="flex items-center justify-between">
            {#each [
              { step: 1, label: 'Services' },
              { step: 2, label: 'Property' },
              { step: 3, label: 'Details' },
              { step: 4, label: 'Confirm' }
            ] as item}
              <div class="flex items-center flex-1">
                <div class="flex items-center justify-center w-10 h-10 rounded-full font-semibold transition-colors {currentStep >= item.step ? 'bg-red-500 text-white' : 'bg-zinc-800 text-zinc-500'}">
                  {#if currentStep > item.step}
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  {:else}
                    {item.step}
                  {/if}
                </div>
                {#if item.step < 4}
                  <div class="flex-1 h-1 mx-4 {currentStep > item.step ? 'bg-red-500' : 'bg-zinc-800'}"></div>
                {/if}
              </div>
            {/each}
          </div>
          <div class="flex justify-between mt-3">
            {#each ['Services', 'Property', 'Your Details', 'Confirmation'] as label}
              <span class="text-xs text-zinc-500 hidden sm:block">{label}</span>
            {/each}
          </div>
        </div>

        <!-- Form Card -->
        <div class="card p-8" use:reveal={{ delay: 100 }}>
          {#if submitSuccess}
            <!-- Success State -->
            <div class="text-center py-12">
              <div class="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                <svg class="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-white mb-4">Thank You, {formData.fullName}!</h2>
              <p class="text-zinc-400 mb-2">
                We've received your quote request.
              </p>
              <p class="text-zinc-400 mb-6">
                Reference: <span class="text-white font-mono">{referenceNumber}</span>
              </p>
              <p class="text-zinc-400 mb-8">
                A member of our team will contact you within 24 hours.
              </p>
              <div class="p-4 bg-red-500/10 rounded-lg inline-block">
                <p class="text-red-400 text-sm font-medium">
                  For emergencies, call us directly: 084 222 2222
                </p>
              </div>
            </div>
          {:else}
            <form onsubmit={(e) => { e.preventDefault(); if (currentStep < 4) nextStep(); else submitForm(); }}>
              <!-- STEP 1: Service Selection -->
              {#if currentStep === 1}
                <div>
                  <h2 class="text-2xl font-bold text-white mb-2">What do you need?</h2>
                  <p class="text-zinc-400 mb-8">Select your client type and services required.</p>

                  <!-- Client Type -->
                  <div class="mb-8">
                    <label class="block text-sm font-medium text-zinc-300 mb-4">Client Type *</label>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {#each [
                        { value: 'residential', label: 'Residential Security' },
                        { value: 'commercial', label: 'Commercial Security' },
                        { value: 'corporate', label: 'Corporate Security' },
                        { value: 'event', label: 'Event Security' },
                        { value: 'vip', label: 'VIP Protection' }
                      ] as option}
                        <button
                          type="button"
                          onclick={() => { formData.clientType = option.value as ClientType; formData.services = []; }}
                          class="p-4 rounded-lg border text-left transition-colors {formData.clientType === option.value ? 'border-red-500 bg-red-500/10 text-white' : 'border-zinc-700 bg-zinc-800/50 text-zinc-400 hover:border-zinc-600'}"
                        >
                          {option.label}
                        </button>
                      {/each}
                    </div>
                    {#if errors.clientType}
                      <p class="text-red-500 text-sm mt-2">{errors.clientType}</p>
                    {/if}
                  </div>

                  <!-- Services -->
                  {#if formData.clientType}
                    <div>
                      <label class="block text-sm font-medium text-zinc-300 mb-4">Services Required *</label>
                      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {#each serviceOptions[formData.clientType] as service}
                          <button
                            type="button"
                            onclick={() => toggleService(service)}
                            class="p-4 rounded-lg border text-left transition-colors {formData.services.includes(service) ? 'border-red-500 bg-red-500/10 text-white' : 'border-zinc-700 bg-zinc-800/50 text-zinc-400 hover:border-zinc-600'}"
                          >
                            <div class="flex items-center justify-between">
                              <span>{service}</span>
                              {#if formData.services.includes(service)}
                                <svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>
                              {/if}
                            </div>
                          </button>
                        {/each}
                      </div>
                      {#if errors.services}
                        <p class="text-red-500 text-sm mt-2">{errors.services}</p>
                      {/if}
                    </div>
                  {/if}
                </div>
              {/if}

              <!-- STEP 2: Property Details -->
              {#if currentStep === 2}
                <div>
                  <h2 class="text-2xl font-bold text-white mb-2">Property Details</h2>
                  <p class="text-zinc-400 mb-8">Tell us about the property to be secured.</p>

                  <div class="space-y-6">
                    <!-- Property Type -->
                    <div>
                      <label for="propertyType" class="block text-sm font-medium text-zinc-300 mb-2">Property Type *</label>
                      <select
                        id="propertyType"
                        bind:value={formData.propertyType}
                        class="w-full px-4 py-3 bg-[#09090B] border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
                      >
                        <option value="">Select property type</option>
                        {#each propertyTypes as type}
                          <option value={type}>{type}</option>
                        {/each}
                      </select>
                      {#if errors.propertyType}
                        <p class="text-red-500 text-sm mt-2">{errors.propertyType}</p>
                      {/if}
                    </div>

                    <!-- Property Size -->
                    <div>
                      <label for="propertySize" class="block text-sm font-medium text-zinc-300 mb-2">Approximate Size *</label>
                      <select
                        id="propertySize"
                        bind:value={formData.propertySize}
                        class="w-full px-4 py-3 bg-[#09090B] border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
                      >
                        <option value="">Select size</option>
                        {#each propertySizes as size}
                          <option value={size}>{size}</option>
                        {/each}
                      </select>
                      {#if errors.propertySize}
                        <p class="text-red-500 text-sm mt-2">{errors.propertySize}</p>
                      {/if}
                    </div>

                    <!-- Access Points -->
                    <div>
                      <label for="accessPoints" class="block text-sm font-medium text-zinc-300 mb-2">Number of Access Points *</label>
                      <select
                        id="accessPoints"
                        bind:value={formData.accessPoints}
                        class="w-full px-4 py-3 bg-[#09090B] border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
                      >
                        <option value="">Select number</option>
                        {#each accessPointOptions as option}
                          <option value={option}>{option}</option>
                        {/each}
                      </select>
                      {#if errors.accessPoints}
                        <p class="text-red-500 text-sm mt-2">{errors.accessPoints}</p>
                      {/if}
                    </div>

                    <!-- Existing Security -->
                    <div>
                      <label class="block text-sm font-medium text-zinc-300 mb-2">Existing Security Measures</label>
                      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {#each existingSecurityOptions as item}
                          <button
                            type="button"
                            onclick={() => toggleExistingSecurity(item)}
                            class="p-3 rounded-lg border text-left transition-colors {formData.existingSecurity.includes(item) ? 'border-red-500 bg-red-500/10 text-white' : 'border-zinc-700 bg-zinc-800/50 text-zinc-400 hover:border-zinc-600'}"
                          >
                            <div class="flex items-center gap-2">
                              <div class="w-5 h-5 rounded border flex items-center justify-center {formData.existingSecurity.includes(item) ? 'border-red-500 bg-red-500' : 'border-zinc-600'}">
                                {#if formData.existingSecurity.includes(item)}
                                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                  </svg>
                                {/if}
                              </div>
                              <span class="text-sm">{item}</span>
                            </div>
                          </button>
                        {/each}
                      </div>
                    </div>

                    <!-- Additional Notes -->
                    <div>
                      <label for="notes" class="block text-sm font-medium text-zinc-300 mb-2">Additional Notes (Optional)</label>
                      <textarea
                        id="notes"
                        bind:value={formData.notes}
                        rows="3"
                        class="w-full px-4 py-3 bg-[#09090B] border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 transition-colors resize-none"
                        placeholder="Any specific requirements or concerns..."
                      ></textarea>
                    </div>
                  </div>
                </div>
              {/if}

              <!-- STEP 3: Your Details -->
              {#if currentStep === 3}
                <div>
                  <h2 class="text-2xl font-bold text-white mb-2">Your Contact Details</h2>
                  <p class="text-zinc-400 mb-8">How can we reach you?</p>

                  <div class="space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <!-- Full Name -->
                      <div>
                        <label for="fullName" class="block text-sm font-medium text-zinc-300 mb-2">Full Name *</label>
                        <input
                          id="fullName"
                          type="text"
                          bind:value={formData.fullName}
                          class="w-full px-4 py-3 bg-[#09090B] border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 transition-colors"
                          placeholder="John Doe"
                        />
                        {#if errors.fullName}
                          <p class="text-red-500 text-sm mt-2">{errors.fullName}</p>
                        {/if}
                      </div>

                      <!-- Company Name (conditional) -->
                      {#if ['commercial', 'corporate', 'event'].includes(formData.clientType)}
                        <div>
                          <label for="companyName" class="block text-sm font-medium text-zinc-300 mb-2">Company Name</label>
                          <input
                            id="companyName"
                            type="text"
                            bind:value={formData.companyName}
                            class="w-full px-4 py-3 bg-[#09090B] border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 transition-colors"
                            placeholder="Company Ltd"
                          />
                        </div>
                      {/if}
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <!-- Email -->
                      <div>
                        <label for="email" class="block text-sm font-medium text-zinc-300 mb-2">Email *</label>
                        <input
                          id="email"
                          type="email"
                          bind:value={formData.email}
                          class="w-full px-4 py-3 bg-[#09090B] border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 transition-colors"
                          placeholder="john@example.com"
                        />
                        {#if errors.email}
                          <p class="text-red-500 text-sm mt-2">{errors.email}</p>
                        {/if}
                      </div>

                      <!-- Phone -->
                      <div>
                        <label for="phone" class="block text-sm font-medium text-zinc-300 mb-2">Phone Number *</label>
                        <input
                          id="phone"
                          type="tel"
                          bind:value={formData.phone}
                          class="w-full px-4 py-3 bg-[#09090B] border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 transition-colors"
                          placeholder="084 123 4567"
                        />
                        {#if errors.phone}
                          <p class="text-red-500 text-sm mt-2">{errors.phone}</p>
                        {/if}
                      </div>
                    </div>

                    <!-- Contact Preferences -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label class="block text-sm font-medium text-zinc-300 mb-2">Preferred Contact Method</label>
                        <div class="space-y-2">
                          {#each [
                            { value: 'phone', label: 'Phone Call' },
                            { value: 'email', label: 'Email' },
                            { value: 'whatsapp', label: 'WhatsApp' }
                          ] as option}
                            <label class="flex items-center gap-2 cursor-pointer">
                              <input
                                type="radio"
                                name="contactMethod"
                                value={option.value}
                                bind:group={formData.contactMethod}
                                class="w-4 h-4 text-red-500 bg-zinc-800 border-zinc-600 focus:ring-red-500"
                              />
                              <span class="text-zinc-400 text-sm">{option.label}</span>
                            </label>
                          {/each}
                        </div>
                      </div>

                      <div>
                        <label class="block text-sm font-medium text-zinc-300 mb-2">Preferred Contact Time</label>
                        <div class="space-y-2">
                          {#each [
                            { value: 'morning', label: 'Morning (8am - 12pm)' },
                            { value: 'afternoon', label: 'Afternoon (12pm - 5pm)' },
                            { value: 'anytime', label: 'Any Time' }
                          ] as option}
                            <label class="flex items-center gap-2 cursor-pointer">
                              <input
                                type="radio"
                                name="contactTime"
                                value={option.value}
                                bind:group={formData.contactTime}
                                class="w-4 h-4 text-red-500 bg-zinc-800 border-zinc-600 focus:ring-red-500"
                              />
                              <span class="text-zinc-400 text-sm">{option.label}</span>
                            </label>
                          {/each}
                        </div>
                      </div>
                    </div>

                    {#if errors.form}
                      <div class="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                        <p class="text-red-400 text-sm">{errors.form}</p>
                      </div>
                    {/if}
                  </div>
                </div>
              {/if}

              <!-- STEP 4: Confirmation -->
              {#if currentStep === 4}
                <div>
                  <h2 class="text-2xl font-bold text-white mb-2">Review & Submit</h2>
                  <p class="text-zinc-400 mb-8">Please review your information before submitting.</p>

                  <div class="space-y-6">
                    <div class="card p-6 bg-zinc-800/50">
                      <h3 class="text-white font-semibold mb-4">Client Type & Services</h3>
                      <p class="text-zinc-400 capitalize mb-2">{formData.clientType}</p>
                      <div class="flex flex-wrap gap-2">
                        {#each formData.services as service}
                          <span class="px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-sm">{service}</span>
                        {/each}
                      </div>
                    </div>

                    <div class="card p-6 bg-zinc-800/50">
                      <h3 class="text-white font-semibold mb-4">Property Details</h3>
                      <div class="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p class="text-zinc-500">Property Type</p>
                          <p class="text-white">{formData.propertyType}</p>
                        </div>
                        <div>
                          <p class="text-zinc-500">Size</p>
                          <p class="text-white">{formData.propertySize}</p>
                        </div>
                        <div>
                          <p class="text-zinc-500">Access Points</p>
                          <p class="text-white">{formData.accessPoints}</p>
                        </div>
                      </div>
                    </div>

                    <div class="card p-6 bg-zinc-800/50">
                      <h3 class="text-white font-semibold mb-4">Contact Information</h3>
                      <div class="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p class="text-zinc-500">Full Name</p>
                          <p class="text-white">{formData.fullName}</p>
                        </div>
                        {#if formData.companyName}
                          <div>
                            <p class="text-zinc-500">Company</p>
                            <p class="text-white">{formData.companyName}</p>
                          </div>
                        {/if}
                        <div>
                          <p class="text-zinc-500">Email</p>
                          <p class="text-white">{formData.email}</p>
                        </div>
                        <div>
                          <p class="text-zinc-500">Phone</p>
                          <p class="text-white">{formData.phone}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              {/if}

              <!-- Navigation Buttons -->
              <div class="flex justify-between mt-8 pt-6 border-t border-zinc-800">
                {#if currentStep > 1 && currentStep < 4}
                  <button
                    type="button"
                    onclick={prevStep}
                    class="btn btn-secondary px-6 py-3"
                  >
                    Back
                  </button>
                {:else}
                  <div></div>
                {/if}

                {#if currentStep < 3}
                  <button
                    type="button"
                    onclick={nextStep}
                    class="btn btn-primary px-6 py-3"
                  >
                    Next
                  </button>
                {:else if currentStep === 3}
                  <button
                    type="button"
                    onclick={() => currentStep = 4}
                    class="btn btn-primary px-6 py-3"
                  >
                    Review
                  </button>
                {:else if currentStep === 4}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    class="btn btn-primary px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {#if isSubmitting}
                      <span class="flex items-center gap-2">
                        <svg class="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" />
                          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Submitting...
                      </span>
                    {:else}
                      Submit Quote Request
                    {/if}
                  </button>
                {/if}
              </div>
            </form>
          {/if}
        </div>

        <!-- Emergency Banner -->
        <div class="mt-8 p-6 card bg-red-500/10 border-red-500/30 text-center" use:reveal={{ delay: 200 }}>
          <p class="text-red-400 font-medium">
            For emergencies, call us directly: <a href="tel:0842222222" class="underline hover:text-red-300">084 222 2222</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</div>

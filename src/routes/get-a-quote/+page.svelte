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
      // Property details are optional — they help VT prepare a better quote
      // but shouldn't block a lead from submitting
    }

    if (step === 3) {
      if (!formData.fullName.trim()) {
        errors.fullName = 'Full name is required';
      }
      // Require at least one contact method (phone or email)
      const hasEmail = formData.email.trim().length > 0;
      const hasPhone = formData.phone.trim().length > 0;
      if (!hasEmail && !hasPhone) {
        errors.email = 'Please provide a phone number or email address';
        errors.phone = 'Please provide a phone number or email address';
      }
      if (hasEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.email = 'Please enter a valid email address';
      }
      if (hasPhone && !/^(\+27|0)[6-8][0-9]{8}$/.test(formData.phone.replace(/\s/g, ''))) {
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

  const propertyTypesByClient: Record<ClientType, string[]> = {
    residential: ['House', 'Townhouse', 'Apartment', 'Estate', 'Other'],
    commercial: ['Office', 'Retail', 'Warehouse', 'Industrial', 'Shopping Centre', 'Other'],
    corporate: ['Office Park', 'Corporate Campus', 'Data Centre', 'Mixed-Use', 'Other'],
    event: ['Venue', 'Outdoor Space', 'Stadium', 'Exhibition Centre', 'Private Residence', 'Other'],
    vip: ['Residence', 'Office', 'Travel Route', 'Other']
  };

  const propertySizesByClient: Record<ClientType, string[]> = {
    residential: ['< 500m²', '500–1000m²', '1000–2000m²', '> 2000m²'],
    commercial: ['< 500m²', '500–2000m²', '2000–5000m²', '> 5000m²'],
    corporate: ['< 1000m²', '1000–5000m²', '5000–20000m²', '> 20000m²'],
    event: ['< 500m²', '500–2000m²', '2000–10000m²', '> 10000m²'],
    vip: ['N/A']
  };

  const accessPointOptions = ['1', '2', '3', '4', '5+'];
</script>

<svelte:head>
  <title>Get a Quote | Vision Tactical | Free Security Quote</title>
  <meta
    name="description"
    content="Get a free, no-obligation quote for your security needs. Quick and easy online quote request for residential and commercial security services."
  />
</svelte:head>

<div class="bg-base">
  <!-- HERO SECTION -->
  <section class="relative py-24 md:py-32 overflow-hidden">
    <div class="glow-ambient glow-ambient-top"></div>
    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-3xl" use:reveal>
        <p class="overline mb-4">GET A QUOTE</p>
        <h1 class="heading-gradient text-4xl md:text-5xl font-bold mb-6">
          Request a Free Quote
        </h1>
        <p class="text-secondary text-lg leading-relaxed">
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
                <div class="flex items-center justify-center w-10 h-10 rounded-full font-semibold transition-colors {currentStep >= item.step ? 'bg-accent-red text-white' : 'bg-elevated text-muted'}">
                  {#if currentStep > item.step}
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  {:else}
                    {item.step}
                  {/if}
                </div>
                {#if item.step < 4}
                  <div class="flex-1 h-1 mx-4 {currentStep > item.step ? 'bg-accent-red' : 'bg-elevated'}"></div>
                {/if}
              </div>
            {/each}
          </div>
          <div class="flex justify-between mt-3">
            {#each ['Services', 'Property', 'Your Details', 'Confirmation'] as label}
              <span class="text-xs text-muted hidden sm:block">{label}</span>
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
              <h2 class="text-2xl font-bold text-primary mb-4">Thank You, {formData.fullName}!</h2>
              <p class="text-secondary mb-2">
                We've received your quote request.
              </p>
              <p class="text-secondary mb-6">
                Reference: <span class="text-primary font-mono">{referenceNumber}</span>
              </p>
              <p class="text-secondary mb-8">
                A member of our team will contact you within 24 hours.
              </p>
              <div class="p-4 bg-red-500/10 rounded-lg inline-block">
                <p class="text-accent-red text-sm font-medium">
                  For emergencies, call us directly: 010 972 2600
                </p>
              </div>
            </div>
          {:else}
            <form onsubmit={(e) => { e.preventDefault(); if (currentStep < 4) nextStep(); else submitForm(); }}>
              <!-- STEP 1: Service Selection -->
              {#if currentStep === 1}
                <div>
                  <h2 class="text-2xl font-bold text-primary mb-2">What do you need?</h2>
                  <p class="text-secondary mb-8">Select your client type and services required.</p>

                  <!-- Client Type -->
                  <div class="mb-8">
                    <p class="block text-sm font-medium text-secondary mb-4">Client Type *</p>
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
                          class="p-4 rounded-lg border text-left transition-colors {formData.clientType === option.value ? 'border-accent-red bg-red-500/10 text-primary' : 'border-line-strong bg-elevated/50 text-secondary hover:border-line-strong'}"
                        >
                          {option.label}
                        </button>
                      {/each}
                    </div>
                    {#if errors.clientType}
                      <p class="text-accent-red text-sm mt-2">{errors.clientType}</p>
                    {/if}
                  </div>

                  <!-- Services -->
                  {#if formData.clientType}
                    <div>
                      <p class="block text-sm font-medium text-secondary mb-4">Services Required *</p>
                      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {#each serviceOptions[formData.clientType] as service}
                          <button
                            type="button"
                            onclick={() => toggleService(service)}
                            class="p-4 rounded-lg border text-left transition-colors {formData.services.includes(service) ? 'border-accent-red bg-red-500/10 text-primary' : 'border-line-strong bg-elevated/50 text-secondary hover:border-line-strong'}"
                          >
                            <div class="flex items-center justify-between">
                              <span>{service}</span>
                              {#if formData.services.includes(service)}
                                <svg class="w-5 h-5 text-accent-red" fill="currentColor" viewBox="0 0 20 20">
                                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>
                              {/if}
                            </div>
                          </button>
                        {/each}
                      </div>
                      {#if errors.services}
                        <p class="text-accent-red text-sm mt-2">{errors.services}</p>
                      {/if}
                    </div>
                  {/if}
                </div>
              {/if}

              <!-- STEP 2: Property Details -->
              {#if currentStep === 2}
                <div>
                  <h2 class="text-2xl font-bold text-primary mb-2">Property Details</h2>
                  <p class="text-secondary mb-8">Help us understand your site. All fields are optional — we'll discuss details when we contact you.</p>

                  <div class="space-y-6">
                    <!-- Property Type (context-aware) -->
                    <div>
                      <label for="propertyType" class="block text-sm font-medium text-secondary mb-2">Property Type</label>
                      <select
                        id="propertyType"
                        bind:value={formData.propertyType}
                        class="w-full px-4 py-3 bg-base border border-line-strong rounded-lg text-primary focus:outline-none focus:border-accent-red transition-colors"
                      >
                        <option value="">Select property type</option>
                        {#each propertyTypesByClient[formData.clientType] || [] as type}
                          <option value={type}>{type}</option>
                        {/each}
                      </select>
                    </div>

                    <!-- Property Size (context-aware) -->
                    {#if formData.clientType !== 'vip'}
                      <div>
                        <label for="propertySize" class="block text-sm font-medium text-secondary mb-2">Approximate Size</label>
                        <select
                          id="propertySize"
                          bind:value={formData.propertySize}
                          class="w-full px-4 py-3 bg-base border border-line-strong rounded-lg text-primary focus:outline-none focus:border-accent-red transition-colors"
                        >
                          <option value="">Select size</option>
                          {#each propertySizesByClient[formData.clientType] || [] as size}
                            <option value={size}>{size}</option>
                          {/each}
                        </select>
                      </div>
                    {/if}

                    <!-- Access Points (not relevant for VIP or events) -->
                    {#if !['vip', 'event'].includes(formData.clientType)}
                      <div>
                        <label for="accessPoints" class="block text-sm font-medium text-secondary mb-2">Number of Access Points</label>
                        <select
                          id="accessPoints"
                          bind:value={formData.accessPoints}
                          class="w-full px-4 py-3 bg-base border border-line-strong rounded-lg text-primary focus:outline-none focus:border-accent-red transition-colors"
                        >
                          <option value="">Select number</option>
                          {#each accessPointOptions as option}
                            <option value={option}>{option}</option>
                          {/each}
                        </select>
                      </div>
                    {/if}

                    <!-- Additional Notes -->
                    <div>
                      <label for="notes" class="block text-sm font-medium text-secondary mb-2">Additional Notes</label>
                      <textarea
                        id="notes"
                        bind:value={formData.notes}
                        rows="3"
                        class="w-full px-4 py-3 bg-base border border-line-strong rounded-lg text-primary placeholder-ghost focus:outline-none focus:border-accent-red transition-colors resize-none"
                        placeholder="Any specific requirements, concerns, or details about your property..."
                      ></textarea>
                    </div>
                  </div>
                </div>
              {/if}

              <!-- STEP 3: Your Details -->
              {#if currentStep === 3}
                <div>
                  <h2 class="text-2xl font-bold text-primary mb-2">Your Contact Details</h2>
                  <p class="text-secondary mb-8">How can we reach you?</p>

                  <div class="space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <!-- Full Name -->
                      <div>
                        <label for="fullName" class="block text-sm font-medium text-secondary mb-2">Full Name *</label>
                        <input
                          id="fullName"
                          type="text"
                          bind:value={formData.fullName}
                          class="w-full px-4 py-3 bg-base border border-line-strong rounded-lg text-primary placeholder-ghost focus:outline-none focus:border-accent-red transition-colors"
                          placeholder="John Doe"
                        />
                        {#if errors.fullName}
                          <p class="text-accent-red text-sm mt-2">{errors.fullName}</p>
                        {/if}
                      </div>

                      <!-- Company Name (conditional) -->
                      {#if ['commercial', 'corporate', 'event'].includes(formData.clientType)}
                        <div>
                          <label for="companyName" class="block text-sm font-medium text-secondary mb-2">Company Name</label>
                          <input
                            id="companyName"
                            type="text"
                            bind:value={formData.companyName}
                            class="w-full px-4 py-3 bg-base border border-line-strong rounded-lg text-primary placeholder-ghost focus:outline-none focus:border-accent-red transition-colors"
                            placeholder="Company Ltd"
                          />
                        </div>
                      {/if}
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <!-- Email -->
                      <div>
                        <label for="email" class="block text-sm font-medium text-secondary mb-2">Email</label>
                        <input
                          id="email"
                          type="email"
                          bind:value={formData.email}
                          class="w-full px-4 py-3 bg-base border border-line-strong rounded-lg text-primary placeholder-ghost focus:outline-none focus:border-accent-red transition-colors"
                          placeholder="john@example.com"
                        />
                        {#if errors.email}
                          <p class="text-accent-red text-sm mt-2">{errors.email}</p>
                        {/if}
                      </div>

                      <!-- Phone -->
                      <div>
                        <label for="phone" class="block text-sm font-medium text-secondary mb-2">Phone Number</label>
                        <input
                          id="phone"
                          type="tel"
                          bind:value={formData.phone}
                          class="w-full px-4 py-3 bg-base border border-line-strong rounded-lg text-primary placeholder-ghost focus:outline-none focus:border-accent-red transition-colors"
                          placeholder="084 123 4567"
                        />
                        {#if errors.phone}
                          <p class="text-accent-red text-sm mt-2">{errors.phone}</p>
                        {/if}
                      </div>
                    </div>

                    <p class="text-muted text-xs -mt-2">* Please provide at least a phone number or email address so we can reach you.</p>

                    <!-- Contact Preferences -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <p class="block text-sm font-medium text-secondary mb-2">Preferred Contact Method</p>
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
                                class="w-4 h-4 text-accent-red bg-elevated border-line-strong focus:ring-accent-red"
                              />
                              <span class="text-secondary text-sm">{option.label}</span>
                            </label>
                          {/each}
                        </div>
                      </div>

                      <div>
                        <p class="block text-sm font-medium text-secondary mb-2">Preferred Contact Time</p>
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
                                class="w-4 h-4 text-accent-red bg-elevated border-line-strong focus:ring-accent-red"
                              />
                              <span class="text-secondary text-sm">{option.label}</span>
                            </label>
                          {/each}
                        </div>
                      </div>
                    </div>

                    {#if errors.form}
                      <div class="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                        <p class="text-accent-red text-sm">{errors.form}</p>
                      </div>
                    {/if}
                  </div>
                </div>
              {/if}

              <!-- STEP 4: Confirmation -->
              {#if currentStep === 4}
                <div>
                  <h2 class="text-2xl font-bold text-primary mb-2">Review & Submit</h2>
                  <p class="text-secondary mb-8">Please review your information before submitting.</p>

                  <div class="space-y-6">
                    <div class="card p-6 bg-elevated/50">
                      <h3 class="text-primary font-semibold mb-4">Client Type & Services</h3>
                      <p class="text-secondary capitalize mb-2">{formData.clientType}</p>
                      <div class="flex flex-wrap gap-2">
                        {#each formData.services as service}
                          <span class="px-3 py-1 rounded-full bg-red-500/10 text-accent-red text-sm">{service}</span>
                        {/each}
                      </div>
                    </div>

                    <div class="card p-6 bg-elevated/50">
                      <h3 class="text-primary font-semibold mb-4">Property Details</h3>
                      <div class="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p class="text-muted">Property Type</p>
                          <p class="text-primary">{formData.propertyType}</p>
                        </div>
                        <div>
                          <p class="text-muted">Size</p>
                          <p class="text-primary">{formData.propertySize}</p>
                        </div>
                        <div>
                          <p class="text-muted">Access Points</p>
                          <p class="text-primary">{formData.accessPoints}</p>
                        </div>
                      </div>
                    </div>

                    <div class="card p-6 bg-elevated/50">
                      <h3 class="text-primary font-semibold mb-4">Contact Information</h3>
                      <div class="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p class="text-muted">Full Name</p>
                          <p class="text-primary">{formData.fullName}</p>
                        </div>
                        {#if formData.companyName}
                          <div>
                            <p class="text-muted">Company</p>
                            <p class="text-primary">{formData.companyName}</p>
                          </div>
                        {/if}
                        <div>
                          <p class="text-muted">Email</p>
                          <p class="text-primary">{formData.email}</p>
                        </div>
                        <div>
                          <p class="text-muted">Phone</p>
                          <p class="text-primary">{formData.phone}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              {/if}

              <!-- Navigation Buttons -->
              <div class="flex justify-between mt-8 pt-6 border-t border-line">
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
          <p class="text-accent-red font-medium">
            For emergencies, call us directly: <a href="tel:0109722600" class="underline hover:text-accent-red-soft">010 972 2600</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</div>

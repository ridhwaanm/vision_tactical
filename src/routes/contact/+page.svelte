<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  let formState = $state({
    name: '',
    email: '',
    phone: '',
    subject: 'general' as 'general' | 'quote' | 'complaint' | 'partnership' | 'media' | 'other',
    message: ''
  });

  let errors = $state<Record<string, string>>({});
  let isSubmitting = $state(false);
  let submitSuccess = $state(false);

  function validateForm(): boolean {
    errors = {};

    if (!formState.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formState.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formState.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^(\+27|0)[6-8][0-9]{8}$/.test(formState.phone.replace(/\s/g, ''))) {
      errors.phone = 'Please enter a valid SA phone number';
    }

    if (!formState.message.trim()) {
      errors.message = 'Message is required';
    } else if (formState.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }

    return Object.keys(errors).length === 0;
  }

  async function submitForm() {
    if (!validateForm()) return;

    isSubmitting = true;

    try {
      const response = await fetch('/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState)
      });

      const result = await response.json();

      if (result.success) {
        submitSuccess = true;
        formState = {
          name: '',
          email: '',
          phone: '',
          subject: 'general',
          message: ''
        };
      } else {
        errors.form = result.error || 'Failed to send message';
      }
    } catch (error) {
      errors.form = 'Network error. Please try again.';
    } finally {
      isSubmitting = false;
    }
  }
</script>

<svelte:head>
  <title>Contact Us | Vision Tactical | Johannesburg Security</title>
  <meta
    name="description"
    content="Get in touch with Vision Tactical. Emergency: 084 222 2222. Email: info@visiontactical.co.za. Office: 49 W Street, Houghton, Johannesburg."
  />
</svelte:head>

<div class="bg-[#09090B]">
  <!-- HERO SECTION -->
  <section class="relative py-24 md:py-32 overflow-hidden">
    <div class="glow-ambient glow-ambient-top"></div>
    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-3xl" use:reveal>
        <p class="overline mb-4">CONTACT US</p>
        <h1 class="heading-gradient text-4xl md:text-5xl font-bold mb-6">
          Get in Touch
        </h1>
        <p class="text-zinc-400 text-lg leading-relaxed">
          Have a question or need security services? We're here to help.
        </p>
      </div>
    </div>
  </section>

  <!-- CONTACT SECTION -->
  <section class="pb-24">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <!-- Contact Information -->
        <div class="lg:col-span-1 space-y-8" use:reveal>
          <div>
            <h2 class="text-xl font-bold text-white mb-6">Contact Information</h2>
            <div class="space-y-6">
              <!-- Phone -->
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 flex-shrink-0">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p class="text-zinc-500 text-sm mb-1">Phone</p>
                  <a href="tel:0842222222" class="text-white hover:text-red-500 transition-colors font-medium">084 222 2222</a>
                </div>
              </div>

              <!-- Email -->
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 flex-shrink-0">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p class="text-zinc-500 text-sm mb-1">Email</p>
                  <a href="mailto:info@visiontactical.co.za" class="text-white hover:text-red-500 transition-colors font-medium">info@visiontactical.co.za</a>
                </div>
              </div>

              <!-- Address -->
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 flex-shrink-0">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p class="text-zinc-500 text-sm mb-1">Address</p>
                  <p class="text-white">49 W Street, Houghton<br />Johannesburg, South Africa</p>
                </div>
              </div>

              <!-- Hours -->
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 flex-shrink-0">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p class="text-zinc-500 text-sm mb-1">Operating Hours</p>
                  <p class="text-white text-sm">Armed Response: 24/7</p>
                  <p class="text-zinc-400 text-sm">Office: Mon-Fri, 8am-5pm</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Emergency Banner -->
          <div class="p-6 card bg-red-500/10 border-red-500/30">
            <div class="flex items-center gap-3 mb-3">
              <svg class="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <h3 class="text-white font-semibold">Emergency?</h3>
            </div>
            <p class="text-zinc-400 text-sm mb-4">
              For immediate assistance, call our 24/7 emergency line.
            </p>
            <a href="tel:0842222222" class="block text-center btn btn-primary">
              Call 084 222 2222
            </a>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="lg:col-span-2" use:reveal={{ delay: 100 }}>
          <div class="card p-8">
            {#if submitSuccess}
              <!-- Success State -->
              <div class="text-center py-12">
                <div class="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                  <svg class="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 class="text-2xl font-bold text-white mb-4">Message Sent!</h2>
                <p class="text-zinc-400 mb-8">
                  Thank you for contacting us. We'll get back to you within 24 hours.
                </p>
                <button
                  onclick={() => submitSuccess = false}
                  class="btn btn-secondary"
                >
                  Send Another Message
                </button>
              </div>
            {:else}
              <form onsubmit={(e) => { e.preventDefault(); submitForm(); }}>
                <h2 class="text-2xl font-bold text-white mb-6">Send us a Message</h2>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <!-- Name -->
                  <div>
                    <label for="contactName" class="block text-sm font-medium text-zinc-300 mb-2">Full Name *</label>
                    <input
                      id="contactName"
                      type="text"
                      bind:value={formState.name}
                      class="w-full px-4 py-3 bg-[#09090B] border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 transition-colors"
                      placeholder="John Doe"
                    />
                    {#if errors.name}
                      <p class="text-red-500 text-sm mt-1">{errors.name}</p>
                    {/if}
                  </div>

                  <!-- Email -->
                  <div>
                    <label for="contactEmail" class="block text-sm font-medium text-zinc-300 mb-2">Email *</label>
                    <input
                      id="contactEmail"
                      type="email"
                      bind:value={formState.email}
                      class="w-full px-4 py-3 bg-[#09090B] border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 transition-colors"
                      placeholder="john@example.com"
                    />
                    {#if errors.email}
                      <p class="text-red-500 text-sm mt-1">{errors.email}</p>
                    {/if}
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <!-- Phone -->
                  <div>
                    <label for="contactPhone" class="block text-sm font-medium text-zinc-300 mb-2">Phone Number *</label>
                    <input
                      id="contactPhone"
                      type="tel"
                      bind:value={formState.phone}
                      class="w-full px-4 py-3 bg-[#09090B] border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 transition-colors"
                      placeholder="084 123 4567"
                    />
                    {#if errors.phone}
                      <p class="text-red-500 text-sm mt-1">{errors.phone}</p>
                    {/if}
                  </div>

                  <!-- Subject -->
                  <div>
                    <label for="contactSubject" class="block text-sm font-medium text-zinc-300 mb-2">Subject *</label>
                    <select
                      id="contactSubject"
                      bind:value={formState.subject}
                      class="w-full px-4 py-3 bg-[#09090B] border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="quote">Request a Quote</option>
                      <option value="complaint">Complaint</option>
                      <option value="partnership">Partnership</option>
                      <option value="media">Media Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <!-- Message -->
                <div class="mb-6">
                  <label for="contactMessage" class="block text-sm font-medium text-zinc-300 mb-2">Message *</label>
                  <textarea
                    id="contactMessage"
                    bind:value={formState.message}
                    rows="5"
                    class="w-full px-4 py-3 bg-[#09090B] border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 transition-colors resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                  {#if errors.message}
                    <p class="text-red-500 text-sm mt-1">{errors.message}</p>
                  {/if}
                </div>

                {#if errors.form}
                  <div class="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                    <p class="text-red-400 text-sm">{errors.form}</p>
                  </div>
                {/if}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  class="btn btn-primary px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto"
                >
                  {#if isSubmitting}
                    <span class="flex items-center gap-2">
                      <svg class="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" />
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  {:else}
                    Send Message
                  {/if}
                </button>
              </form>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- MAP SECTION -->
  <section class="pb-24">
    <div class="container mx-auto px-4">
      <div class="card overflow-hidden" use:reveal>
        <div class="aspect-[21/9] bg-zinc-800 flex items-center justify-center">
          <div class="text-center">
            <svg class="w-16 h-16 text-zinc-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <p class="text-zinc-500">Interactive map coming soon</p>
            <p class="text-zinc-600 text-sm mt-2">49 W Street, Houghton, Johannesburg</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

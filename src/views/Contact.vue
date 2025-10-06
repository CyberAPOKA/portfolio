<script setup>
import { ref, computed } from 'vue'
import Button from '@/components/daisyui/Button.vue'
import Alert from '@/components/daisyui/Alert.vue'
import Input from '@/components/daisyui/Input.vue'
import Textarea from '@/components/daisyui/Textarea.vue'
import emailjs from '@emailjs/browser'
import { useI18n } from 'vue-i18n'

const form = ref({
    name: '',
    email: '',
    subject: '',
    message: ''
})

const isSubmitting = ref(false)
const showMessage = ref(false)
const messageType = ref('success')
const messageText = ref('')
const { t } = useI18n()

// WhatsApp link with prefilled message
const whatsappNumber = '5551999304836'
const whatsAppLink = computed(() => {
    const text = t('contact.whatsapp.prefill')
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`
})

const submitForm = async () => {
    isSubmitting.value = true

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    try {
        if (!serviceId || !templateId || !publicKey) {
            throw new Error('Missing EmailJS configuration')
        }

        await emailjs.send(
            serviceId,
            templateId,
            {
                from_name: form.value.name,
                from_email: form.value.email,
                reply_to: form.value.email,
                subject: form.value.subject,
                message: form.value.message,
                email: 'oficialsteffens@hotmail.com'
            },
            { publicKey }
        )

        form.value = { name: '', email: '', subject: '', message: '' }

        messageType.value = 'success'
        messageText.value = t('contact.messages.success')
        showMessage.value = true
        setTimeout(() => { showMessage.value = false }, 5000)

    } catch (error) {
        console.log('error', error);

        messageType.value = 'error'
        messageText.value = t('contact.messages.error')
        showMessage.value = true
        setTimeout(() => { showMessage.value = false }, 5000)
    } finally {
        isSubmitting.value = false
    }
}
</script>

<template>
    <div class="max-w-4xl mx-auto">
        <!-- Contact Hero -->
        <div class="hero bg-base-200 rounded-lg mb-8">
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <h1 class="text-4xl font-bold text-primary">{{ $t('contact.heroTitle') }}</h1>
                    <p class="py-6 text-base-content">
                        {{ $t('contact.heroDescription') }}
                    </p>
                </div>
            </div>
        </div>

        <!-- Contact Form and Info -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Contact Form -->
            <div>
                <h2 class="text-2xl font-bold mb-4 text-base-content">{{ $t('contact.form.title') }}</h2>
                <form @submit.prevent="submitForm" class="space-y-4">
                    <Input v-model="form.name" :label="$t('contact.form.name')"
                        :placeholder="$t('contact.form.placeholders.name')" required />

                    <Input v-model="form.email" type="email" :label="$t('contact.form.email')"
                        :placeholder="$t('contact.form.placeholders.email')" required />

                    <Input v-model="form.subject" :label="$t('contact.form.subject')"
                        :placeholder="$t('contact.form.placeholders.subject')" required />

                    <Textarea v-model="form.message" :label="$t('contact.form.message')"
                        :placeholder="$t('contact.form.placeholders.message')" :rows="6" required />

                    <div class="form-control">
                        <Button type="submit" variant="primary" size="lg" :loading="isSubmitting" class="w-full">
                            {{ isSubmitting ? $t('contact.form.sending') : $t('contact.form.send') }}
                        </Button>
                    </div>
                </form>
            </div>

            <!-- Contact Information -->
            <div>
                <h2 class="text-2xl font-bold mb-4 text-base-content">{{ $t('contact.info.title') }}</h2>

                <div class="space-y-6">
                    <div class="flex items-center space-x-4">
                        <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                            <svg class="w-6 h-6 text-primary-content" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                                </path>
                            </svg>
                        </div>
                        <div>
                            <h3 class="font-semibold text-base-content">{{ $t('contact.info.email') }}</h3>
                            <p class="text-base-content opacity-70">oficialsteffens@hotmail.com</p>
                        </div>
                    </div>

                    <div class="flex items-center space-x-4">
                        <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                            <svg class="w-6 h-6 text-primary-content" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                                </path>
                            </svg>
                        </div>
                        <div>
                            <h3 class="font-semibold text-base-content">{{ $t('contact.info.phone') }}</h3>
                            <p class="text-base-content opacity-70">(+55) 51 9 9930 4836</p>
                            <div class="flex items-center gap-1 text-primary text-lg mt-1">
                                <a class="flex items-center gap-1 link link-hover" :href="whatsAppLink" target="_blank">
                                    <Button variant="primary">
                                        {{ $t('contact.whatsapp.button') }}
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 32 32" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <title>whatsapp</title>
                                            <path
                                                d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z">
                                            </path>
                                        </svg>
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center space-x-4">
                        <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                            <svg class="w-6 h-6 text-primary-content" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                                </path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 class="font-semibold text-base-content">{{ $t('contact.info.location') }}</h3>
                            <p class="text-base-content opacity-70">Porto Alegre, RS</p>
                        </div>
                    </div>
                </div>

                <!-- Social Links -->
                <div class="mt-8">
                    <h3 class="text-lg font-semibold mb-4 text-base-content">{{ $t('contact.follow') }}</h3>
                    <div class="flex space-x-4">
                        <a href="http://github.com/CyberAPOKA" target="_blank" class="btn btn-circle btn-outline">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                        <a href="http://linkedin.com/in/christiansteffens/" target="_blank"
                            class="btn btn-circle btn-outline">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/christian.steffens_/" target="_blank"
                            class="btn btn-circle btn-outline">
                            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z" />
                                <path
                                    d="M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zM21.7 8.991a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Success/Error Messages -->
        <div v-if="showMessage" class="mt-8">
            <Alert :type="messageType">
                {{ messageText }}
            </Alert>
        </div>
    </div>
</template>
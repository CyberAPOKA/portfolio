<script setup>
import Button from '@/components/daisyui/Button.vue'

const emit = defineEmits(['go-to-contact'])

const goToContact = () => {
    emit('go-to-contact')
}
</script>

<template>
    <!-- CTA Section -->
    <div class="container mx-auto p-8">
        <div class="hero bg-base-200 rounded-lg glass">
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <h2 class="text-3xl font-bold text-primary">{{ $t('contact.title') }}</h2>
                    <p class="py-6 text-base-content">
                        {{ $t('contact.subtitle') }}
                    </p>
                    <Button variant="primary" size="lg" :fancy="true" @click="goToContact">
                        {{ $t('contact.title') }}
                    </Button>
                </div>
            </div>
        </div>
    </div>
</template>

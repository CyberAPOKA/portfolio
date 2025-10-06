<script setup>
import Button from '@/components/daisyui/Button.vue'

const emit = defineEmits(['scroll-to-projects'])

const scrollToProjects = () => {
    emit('scroll-to-projects')
}
</script>

<template>
    <!-- Hero Section -->
    <div class="flex flex-col items-center justify-center min-h-screen pb-16">
        <div class="hero-content text-center">
            <div class="max-w-md">
                <h1 class="text-4xl font-bold text-primary">
                    {{ $t('home.title') }}
                </h1>
                <p class="py-6 text-base-content">
                    {{ $t('home.description') }}
                </p>
                <Button variant="primary" size="lg" :fancy="true" @click="scrollToProjects">
                    {{ $t('home.cta') }}
                </Button>
            </div>
        </div>
    </div>
</template>

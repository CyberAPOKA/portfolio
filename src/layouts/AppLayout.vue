<script setup>
import AppHeader from '@/components/AppHeader.vue'
import Footer from '@/components/daisyui/Footer.vue'
import ParticlesBackground from '@/components/ParticlesBackground.vue'
import Cursor from '@/components/Cursor.vue'

const brandName = 'Portfolio'
const footerDescription = 'A modern portfolio built with Vue.js and DaisyUI'
const copyright = 'Copyright © 2024 - All rights reserved'

const socialLinks = [
    { name: 'GitHub', url: 'https://github.com' },
    { name: 'LinkedIn', url: 'https://linkedin.com' },
    { name: 'Twitter', url: 'https://twitter.com' }
]
</script>

<template>
    <div class="min-h-screen bg-base-100 relative">

        <!-- Header -->
        <AppHeader />

        <!-- Main Content -->
        <main class="container mx-auto px-4 py-8 relative z-10">
            <!-- Particles Background -->
            <ParticlesBackground />

            <!-- Custom Cursor -->
            <Cursor />

            <!-- Router View -->
            <router-view />
        </main>

        <!-- Footer -->
        <Footer />
    </div>
</template>
<script setup>
import AppHeader from '@/components/AppHeader.vue'
import Footer from '@/components/daisyui/Footer.vue'
import ParticlesBackground from '@/components/ParticlesBackground.vue'
import Cursor from '@/components/Cursor.vue'
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
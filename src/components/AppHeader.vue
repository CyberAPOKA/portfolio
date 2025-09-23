<script setup>
import Navbar from '@/components/daisyui/Navbar.vue'
import MusicPlayer from '@/components/MusicPlayer.vue'
import ThemeSelector from '@/components/ThemeSelector.vue'

const brandName = 'Portfolio'

const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
]
</script>

<template>
    <header class="sticky top-0 z-50">
        <Navbar :brand-name="brandName" :menu-items="menuItems">
            <template #end>
                <!-- Music Player -->
                <MusicPlayer />

                <!-- Theme Selector -->
                <ThemeSelector />
            </template>
        </Navbar>
    </header>
</template>
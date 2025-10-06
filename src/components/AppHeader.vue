<script setup>
import { computed } from 'vue'
import Navbar from '@/components/daisyui/Navbar.vue'
import MusicPlayer from '@/components/MusicPlayer.vue'
import ThemeSelector from '@/components/ThemeSelector.vue'
import LanguageSelector from '@/components/LanguageSelector.vue'

const brandName = 'Portfolio'

const menuItems = computed(() => [
    { name: 'nav.home', path: '/' },
    { name: 'nav.about', path: '/about' },
    { name: 'nav.contact', path: '/contact' }
])
</script>

<template>
    <header class="sticky top-0 z-50">
        <Navbar :brand-name="brandName" :menu-items="menuItems">
            <template #end>
                <!-- Language Selector -->
                <LanguageSelector />

                <!-- Music Player -->
                <MusicPlayer />

                <!-- Theme Selector -->
                <ThemeSelector />
            </template>
        </Navbar>
    </header>
</template>
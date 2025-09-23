<template>
    <div class="min-h-screen bg-base-100">
        <!-- Header -->
        <header class="sticky top-0 z-50">
            <Navbar :brand-name="brandName" :menu-items="menuItems">
                <template #end>
                    <div class="dropdown dropdown-end">
                        <div tabindex="0" role="button" class="btn btn-ghost">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z">
                                </path>
                            </svg>
                            Theme
                        </div>
                        <ul tabindex="0"
                            class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-screen max-w-md lg:max-w-3xl max-h-96 overflow-y-auto">
                            <li v-for="theme in themes" :key="theme">
                                <button @click="changeTheme(theme)" class="gap-3 px-2 w-full text-left"
                                    :class="{ 'active': currentTheme === theme }">
                                    <div :data-theme="theme"
                                        class="bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm">
                                        <div class="bg-base-content size-1 rounded-full"></div>
                                        <div class="bg-primary size-1 rounded-full"></div>
                                        <div class="bg-secondary size-1 rounded-full"></div>
                                        <div class="bg-accent size-1 rounded-full"></div>
                                    </div>
                                    <div class="w-32 truncate">{{ theme }}</div>
                                    <svg v-if="currentTheme === theme" xmlns="http://www.w3.org/2000/svg" width="16"
                                        height="16" viewBox="0 0 24 24" fill="currentColor" class="h-3 w-3 shrink-0">
                                        <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z">
                                        </path>
                                    </svg>
                                </button>
                            </li>
                        </ul>
                    </div>
                </template>
            </Navbar>
        </header>

        <!-- Main Content -->
        <main class="container mx-auto px-4 py-8">
            <router-view />
        </main>

        <!-- Footer -->
        <footer class="mt-auto">
            <Footer :title="brandName" :description="footerDescription" :copyright="copyright"
                :social-links="socialLinks" />
        </footer>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Navbar from '@/components/daisyui/Navbar.vue'
import Footer from '@/components/daisyui/Footer.vue'

const currentTheme = ref('light')

const themes = [
    'light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate',
    'synthwave', 'retro', 'cyberpunk', 'valentine', 'halloween', 'garden',
    'forest', 'aqua', 'lofi', 'pastel', 'fantasy', 'wireframe', 'black',
    'luxury', 'dracula', 'cmyk', 'autumn', 'business', 'acid', 'lemonade',
    'night', 'coffee', 'winter', 'dim', 'nord', 'sunset', 'caramellatte',
    'abyss', 'silk'
]

const brandName = 'Portfolio'
const footerDescription = 'A modern portfolio built with Vue.js and DaisyUI'
const copyright = 'Copyright © 2024 - All rights reserved'

const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
]

const socialLinks = [
    { name: 'GitHub', url: 'https://github.com' },
    { name: 'LinkedIn', url: 'https://linkedin.com' },
    { name: 'Twitter', url: 'https://twitter.com' }
]

const changeTheme = (theme) => {
    currentTheme.value = theme
    document.documentElement.removeAttribute('data-theme')
    document.documentElement.setAttribute('data-theme', theme)
    document.body.setAttribute('data-theme', theme)
}

onMounted(() => {
    changeTheme('light')
})
</script>
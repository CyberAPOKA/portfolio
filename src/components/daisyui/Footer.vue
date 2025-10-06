<script setup>

const title = 'Portfolio'
const description = 'A modern portfolio built with Vue.js and DaisyUI'
const copyright = 'Copyright © 2024 - All rights reserved'
const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/CyberAPOKA' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/christiansteffens/' },
    { name: 'Instagram', url: 'https://www.instagram.com/christian.steffens_/' }
]
</script>

<template>
    <footer class="mt-auto relative z-10 footer footer-center p-10 bg-base-200 text-base-content">
        <div>
            <h3 class="font-bold text-lg">{{ title }}</h3>
            <p class="max-w-md">{{ description }}</p>
            <div class="grid grid-flow-col gap-4 mt-4">
                <a v-for="link in socialLinks" :key="link.name" :href="link.url" class="link link-hover">
                    {{ link.name }}
                </a>
            </div>
        </div>
        <div>
            <p>{{ copyright }}</p>
        </div>
    </footer>
</template>

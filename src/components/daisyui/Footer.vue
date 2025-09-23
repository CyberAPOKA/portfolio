<template>
    <footer class="footer footer-center p-10 bg-base-200 text-base-content">
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

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: 'Portfolio'
    },
    description: {
        type: String,
        default: 'A modern portfolio built with Vue.js and DaisyUI'
    },
    copyright: {
        type: String,
        default: 'Copyright © 2024 - All rights reserved'
    },
    socialLinks: {
        type: Array,
        default: () => [
            { name: 'GitHub', url: '#' },
            { name: 'LinkedIn', url: '#' },
            { name: 'Twitter', url: '#' }
        ]
    }
})
</script>

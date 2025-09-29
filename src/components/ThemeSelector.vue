<script setup>
import { useThemeStore } from '@/stores/theme'
import Button from '@/components/daisyui/Button.vue'

const themes = [
    'light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate',
    'synthwave', 'retro', 'cyberpunk', 'valentine', 'halloween', 'garden',
    'forest', 'aqua', 'lofi', 'pastel', 'fantasy', 'wireframe', 'black',
    'luxury', 'dracula', 'cmyk', 'autumn', 'business', 'acid', 'lemonade',
    'night', 'coffee', 'winter', 'dim', 'nord', 'sunset', 'caramellatte',
    'abyss', 'silk'
]

const themeStore = useThemeStore()
</script>

<template>
    <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost">
            Theme
        </div>
        <ul tabindex="0"
            class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-screen max-w-md lg:max-w-3xl max-h-96 overflow-y-auto">
            <li v-for="theme in themes" :key="theme">
                <Button @click="themeStore.changeTheme(theme)" variant="ghost"
                    :class="['gap-3 px-2 w-full text-left', { 'btn-active': themeStore.currentTheme === theme }]">
                    <div :data-theme="theme"
                        class="bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm">
                        <div class="bg-base-content size-1 rounded-full"></div>
                        <div class="bg-primary size-1 rounded-full"></div>
                        <div class="bg-secondary size-1 rounded-full"></div>
                        <div class="bg-accent size-1 rounded-full"></div>
                    </div>
                    <div class="w-32 truncate">{{ theme }}</div>
                </Button>
            </li>
        </ul>
    </div>
</template>

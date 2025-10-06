<template>
    <div class="language-selector">
        <div class="dropdown dropdown-end">
            <div tabindex="0" role="button" class="btn btn-ghost btn-sm gap-2">
                <span class="text-lg">{{ currentLocale?.flag }}</span>
                <span class="hidden sm:inline">{{ $t('language.select') }}</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
            <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li v-for="locale in availableLocales" :key="locale.code">
                    <button @click="setLocale(locale.code)" :class="{ 'active': locale.code === currentLocale?.code }"
                        class="flex items-center gap-3">
                        <span class="text-lg">{{ locale.flag }}</span>
                        <span>{{ locale.name }}</span>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { useLanguageStore } from '../stores/language.js'

const languageStore = useLanguageStore()
const { availableLocales, currentLocale, setLocale } = languageStore

// Inicializar idioma quando o componente for montado
import { onMounted } from 'vue'
onMounted(() => {
    languageStore.initializeLocale()
})
</script>

<style scoped>
.language-selector .dropdown-content .active {
    background-color: hsl(var(--a));
    color: hsl(var(--ac));
}
</style>

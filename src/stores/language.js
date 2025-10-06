import { defineStore } from 'pinia'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

export const useLanguageStore = defineStore('language', () => {
    const { locale } = useI18n()

    // Idades disponíveis
    const availableLocales = [
        { code: 'pt-BR', name: 'Português', flag: '🇧🇷' },
        { code: 'en-US', name: 'English', flag: '🇺🇸' }
    ]

    // Idioma atual (computed)
    const currentLocale = computed(() => {
        return availableLocales.find(l => l.code === locale.value)
    })

    // Função para alterar idioma
    const setLocale = (newLocale) => {
        if (availableLocales.some(l => l.code === newLocale)) {
            locale.value = newLocale
            localStorage.setItem('preferred-locale', newLocale)
        }
    }

    // Função para alternar idioma
    const toggleLocale = () => {
        const currentIndex = availableLocales.findIndex(l => l.code === locale.value)
        const nextIndex = (currentIndex + 1) % availableLocales.length
        setLocale(availableLocales[nextIndex].code)
    }

    // Inicializar idioma do localStorage
    const initializeLocale = () => {
        const savedLocale = localStorage.getItem('preferred-locale')
        if (savedLocale && availableLocales.some(l => l.code === savedLocale)) {
            locale.value = savedLocale
        }
    }

    return {
        availableLocales,
        currentLocale,
        setLocale,
        toggleLocale,
        initializeLocale
    }
})

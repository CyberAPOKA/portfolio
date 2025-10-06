import { createI18n } from 'vue-i18n'
import portuguese from './locales/pt-BR.js'
import english from './locales/en-US.js'

const messages = {
    'pt-BR': portuguese,
    'en-US': english
}

const i18n = createI18n({
    legacy: false,
    locale: 'pt-BR', // idioma padrão
    fallbackLocale: 'en-US', // idioma de fallback
    messages
})

export default i18n

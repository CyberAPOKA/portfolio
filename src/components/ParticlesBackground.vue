<script setup>
import { onMounted, onUnmounted, watch } from 'vue'
import { useThemeStore } from '@/stores/theme'

let particlesInstance = null
const themeStore = useThemeStore()

// Função para obter cores do tema atual do DaisyUI
function getThemeColors() {
    const style = getComputedStyle(document.documentElement)

    // Obtém as cores principais do tema atual
    const primary = style.getPropertyValue('--p').trim()
    const secondary = style.getPropertyValue('--s').trim()
    const accent = style.getPropertyValue('--a').trim()
    const baseContent = style.getPropertyValue('--bc').trim()

    // Converte HSL para hex se necessário
    function hslToHex(hsl) {
        if (!hsl || hsl.startsWith('#')) return hsl

        // Remove 'hsl(' e ')' e divide os valores
        const values = hsl.replace(/hsl\(|\)/g, '').split(',')
        if (values.length !== 3) return hsl

        const h = parseInt(values[0].trim())
        const s = parseInt(values[1].trim().replace('%', '')) / 100
        const l = parseInt(values[2].trim().replace('%', '')) / 100

        // Converte HSL para RGB
        const c = (1 - Math.abs(2 * l - 1)) * s
        const x = c * (1 - Math.abs((h / 60) % 2 - 1))
        const m = l - c / 2

        let r, g, b

        if (0 <= h && h < 60) {
            r = c; g = x; b = 0
        } else if (60 <= h && h < 120) {
            r = x; g = c; b = 0
        } else if (120 <= h && h < 180) {
            r = 0; g = c; b = x
        } else if (180 <= h && h < 240) {
            r = 0; g = x; b = c
        } else if (240 <= h && h < 300) {
            r = x; g = 0; b = c
        } else if (300 <= h && h < 360) {
            r = c; g = 0; b = x
        }

        // Converte para hex
        const toHex = (n) => {
            const hex = Math.round((n + m) * 255).toString(16)
            return hex.length === 1 ? '0' + hex : hex
        }

        return `#${toHex(r)}${toHex(g)}${toHex(b)}`
    }

    return {
        primary: hslToHex(primary) || '#3b82f6',
        secondary: hslToHex(secondary) || '#8b5cf6',
        accent: hslToHex(accent) || '#f59e0b',
        baseContent: hslToHex(baseContent) || '#1f2937'
    }
}

function initParticles() {
    if (!window.particlesJS) return

    const colors = getThemeColors()

    window.particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: colors.primary },
            shape: { type: 'circle' },
            opacity: { value: 0.5 },
            size: { value: 3, random: true },
            line_linked: {
                enable: true,
                distance: 150,
                color: colors.accent,
                opacity: 0.4,
                width: 1
            },
            move: { enable: true, speed: 0.6 }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: true, mode: 'repulse' },
                onclick: { enable: false, mode: 'push' },
                resize: true
            },
            modes: {
                repulse: {
                    distance: 200,
                    duration: 0.4
                }
            }
        },
        retina_detect: true
    })
}

onMounted(() => {
    initParticles()
})

watch(() => themeStore.currentTheme, () => {
    const el = document.getElementById("particles-js")
    if (el) el.innerHTML = "" // limpa canvas anterior
    initParticles()
})

onUnmounted(() => {
    const el = document.getElementById("particles-js")
    if (el) el.innerHTML = ""
})
</script>

<template>
    <div id="particles-js" class="fixed inset-0"></div>
</template>

<style scoped>
#particles-js {
    width: 100%;
    height: 100%;
    background: transparent;
}

#particles-js canvas {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
}

@media (max-width: 768px) {
    #particles-js {
        display: none;
    }
}
</style>

<script setup>
import { onMounted, onUnmounted } from 'vue'

let particlesInstance = null

onMounted(() => {
    console.log('ParticlesBackground mounted')
    console.log('window.particlesJS:', window.particlesJS)

    if (window.particlesJS) {
        window.particlesJS.load('particles-js', '/particles.json', () => {
            console.log('callback - particles.js config loaded')
        })
    } else {
        console.error('particlesJS not found on window object')
    }
})

onUnmounted(() => {
    // Não existe "destroy" oficial no particles.js original
    const el = document.getElementById("particles-js")
    if (el) el.innerHTML = "" // limpa o canvas
})
</script>

<template>
    <div id="particles-js" class="fixed inset-0 z-0"></div>
</template>

<style scoped>
#particles-js {
    width: 100%;
    height: 100%;
    background: transparent;
}

/* Ensure particles are behind content */
#particles-js canvas {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
}

/* Responsive - hide on mobile */
@media (max-width: 768px) {
    #particles-js {
        display: none;
    }
}
</style>
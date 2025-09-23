<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const cursor = ref(null)
const cursorDot = ref(null)
const cursorOutline = ref(null)

let mouseX = 0
let mouseY = 0
let outlineX = 0
let outlineY = 0

const handleMouseMove = (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
}

const handleMouseDown = () => {
    if (cursorOutline.value) {
        cursorOutline.value.classList.add('clicking')
    }
}

const handleMouseUp = () => {
    if (cursorOutline.value) {
        cursorOutline.value.classList.remove('clicking')
    }
}

const animateOutline = () => {
    outlineX += (mouseX - outlineX) * 0.18
    outlineY += (mouseY - outlineY) * 0.18

    // Move both the outline and the dot with the same smoothed position
    if (cursorOutline.value) {
        cursorOutline.value.style.left = outlineX + 'px'
        cursorOutline.value.style.top = outlineY + 'px'
    }
    if (cursorDot.value) {
        cursorDot.value.style.left = outlineX + 'px'
        cursorDot.value.style.top = outlineY + 'px'
    }

    requestAnimationFrame(animateOutline)
}

onMounted(() => {
    // Inicializar posições
    outlineX = mouseX
    outlineY = mouseY

    // Adicionar event listeners
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)

    // Iniciar animação
    animateOutline()

    // Manter cursor padrão do navegador
    // document.body.style.cursor = 'none' // Removido
})

onUnmounted(() => {
    // Remover event listeners
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mousedown', handleMouseDown)
    document.removeEventListener('mouseup', handleMouseUp)

    // Cursor padrão já está ativo, não precisa restaurar
    // document.body.style.cursor = 'auto' // Removido
})
</script>

<template>
    <div class="custom-cursor">
        <!-- Cursor dot (ponto pequeno) -->
        <div ref="cursorDot" class="cursor-dot"></div>

        <!-- Cursor outline (círculo maior) -->
        <div ref="cursorOutline" class="cursor-outline"></div>
    </div>
</template>

<style scoped>
.custom-cursor {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 9998;
    mix-blend-mode: difference;
}

.cursor-dot {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.08s ease;
    pointer-events: none;
    z-index: 9999;
    /* DaisyUI theme color */
    @apply bg-primary;
}

.cursor-outline {
    position: absolute;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.08s ease;
    pointer-events: none;
    z-index: 9998;
    /* DaisyUI theme color */
    @apply border-2 border-primary/30;
}

.cursor-outline.clicking {
    transform: translate(-50%, -50%) scale(2);
    /* DaisyUI theme color stronger on click */
    @apply border border-primary/50;
}

/* Hover effects */
.cursor-dot:hover {
    transform: translate(-50%, -50%) scale(1.5);
}

.cursor-outline:hover {
    transform: translate(-50%, -50%) scale(1.2);
}

/* Click animation via class (mousedown/up) */


/* Responsive - hide on mobile */
@media (max-width: 768px) {
    .custom-cursor {
        display: none;
    }
}
</style>
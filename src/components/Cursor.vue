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
    background: #3b82f6;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.08s ease;
    pointer-events: none;
    z-index: 9999;
}

.cursor-outline {
    position: absolute;
    width: 25px;
    height: 25px;
    border: 2px solid rgba(59, 130, 246, 0.3);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.08s ease;
    pointer-events: none;
    z-index: 9998;
}

.cursor-outline.clicking {
    transform: translate(-50%, -50%) scale(2);
    border: 1px solid rgba(59, 130, 246, 0.45);
}

/* Hover effects */
.cursor-dot:hover {
    transform: translate(-50%, -50%) scale(1.5);
}

.cursor-outline:hover {
    transform: translate(-50%, -50%) scale(1.2);
}

/* Click animation via class (mousedown/up) */

/* Theme colors */
[data-theme="dark"] .cursor-dot {
    background: #60a5fa;
}

[data-theme="dark"] .cursor-outline {
    border-color: rgba(96, 165, 250, 0.3);
}

[data-theme="cupcake"] .cursor-dot {
    background: #ff9ff3;
}

[data-theme="cupcake"] .cursor-outline {
    border-color: rgba(255, 159, 243, 0.3);
}

[data-theme="bumblebee"] .cursor-dot {
    background: #fbbf24;
}

[data-theme="bumblebee"] .cursor-outline {
    border-color: rgba(251, 191, 36, 0.3);
}

[data-theme="emerald"] .cursor-dot {
    background: #10b981;
}

[data-theme="emerald"] .cursor-outline {
    border-color: rgba(16, 185, 129, 0.3);
}

[data-theme="corporate"] .cursor-dot {
    background: #6366f1;
}

[data-theme="corporate"] .cursor-outline {
    border-color: rgba(99, 102, 241, 0.3);
}

[data-theme="synthwave"] .cursor-dot {
    background: #ff00ff;
}

[data-theme="synthwave"] .cursor-outline {
    border-color: rgba(255, 0, 255, 0.3);
}

[data-theme="retro"] .cursor-dot {
    background: #f59e0b;
}

[data-theme="retro"] .cursor-outline {
    border-color: rgba(245, 158, 11, 0.3);
}

[data-theme="cyberpunk"] .cursor-dot {
    background: #00ff00;
}

[data-theme="cyberpunk"] .cursor-outline {
    border-color: rgba(0, 255, 0, 0.3);
}

[data-theme="valentine"] .cursor-dot {
    background: #f472b6;
}

[data-theme="valentine"] .cursor-outline {
    border-color: rgba(244, 114, 182, 0.3);
}

[data-theme="halloween"] .cursor-dot {
    background: #f97316;
}

[data-theme="halloween"] .cursor-outline {
    border-color: rgba(249, 115, 22, 0.3);
}

[data-theme="garden"] .cursor-dot {
    background: #84cc16;
}

[data-theme="garden"] .cursor-outline {
    border-color: rgba(132, 204, 22, 0.3);
}

[data-theme="forest"] .cursor-dot {
    background: #16a34a;
}

[data-theme="forest"] .cursor-outline {
    border-color: rgba(22, 163, 74, 0.3);
}

[data-theme="aqua"] .cursor-dot {
    background: #06b6d4;
}

[data-theme="aqua"] .cursor-outline {
    border-color: rgba(6, 182, 212, 0.3);
}

[data-theme="lofi"] .cursor-dot {
    background: #8b5cf6;
}

[data-theme="lofi"] .cursor-outline {
    border-color: rgba(139, 92, 246, 0.3);
}

[data-theme="pastel"] .cursor-dot {
    background: #f0abfc;
}

[data-theme="pastel"] .cursor-outline {
    border-color: rgba(240, 171, 252, 0.3);
}

[data-theme="fantasy"] .cursor-dot {
    background: #a78bfa;
}

[data-theme="fantasy"] .cursor-outline {
    border-color: rgba(167, 139, 250, 0.3);
}

[data-theme="wireframe"] .cursor-dot {
    background: #6b7280;
}

[data-theme="wireframe"] .cursor-outline {
    border-color: rgba(107, 114, 128, 0.3);
}

[data-theme="black"] .cursor-dot {
    background: #ffffff;
}

[data-theme="black"] .cursor-outline {
    border-color: rgba(255, 255, 255, 0.3);
}

[data-theme="luxury"] .cursor-dot {
    background: #d4af37;
}

[data-theme="luxury"] .cursor-outline {
    border-color: rgba(212, 175, 55, 0.3);
}

[data-theme="dracula"] .cursor-dot {
    background: #ff79c6;
}

[data-theme="dracula"] .cursor-outline {
    border-color: rgba(255, 121, 198, 0.3);
}

[data-theme="cmyk"] .cursor-dot {
    background: #ff0000;
}

[data-theme="cmyk"] .cursor-outline {
    border-color: rgba(255, 0, 0, 0.3);
}

[data-theme="autumn"] .cursor-dot {
    background: #f97316;
}

[data-theme="autumn"] .cursor-outline {
    border-color: rgba(249, 115, 22, 0.3);
}

[data-theme="business"] .cursor-dot {
    background: #1f2937;
}

[data-theme="business"] .cursor-outline {
    border-color: rgba(31, 41, 55, 0.3);
}

[data-theme="acid"] .cursor-dot {
    background: #00ff00;
}

[data-theme="acid"] .cursor-outline {
    border-color: rgba(0, 255, 0, 0.3);
}

[data-theme="lemonade"] .cursor-dot {
    background: #fbbf24;
}

[data-theme="lemonade"] .cursor-outline {
    border-color: rgba(251, 191, 36, 0.3);
}

[data-theme="night"] .cursor-dot {
    background: #1e40af;
}

[data-theme="night"] .cursor-outline {
    border-color: rgba(30, 64, 175, 0.3);
}

[data-theme="coffee"] .cursor-dot {
    background: #92400e;
}

[data-theme="coffee"] .cursor-outline {
    border-color: rgba(146, 64, 14, 0.3);
}

[data-theme="winter"] .cursor-dot {
    background: #e5e7eb;
}

[data-theme="winter"] .cursor-outline {
    border-color: rgba(229, 231, 235, 0.3);
}

[data-theme="dim"] .cursor-dot {
    background: #4b5563;
}

[data-theme="dim"] .cursor-outline {
    border-color: rgba(75, 85, 99, 0.3);
}

[data-theme="nord"] .cursor-dot {
    background: #5e81ac;
}

[data-theme="nord"] .cursor-outline {
    border-color: rgba(94, 129, 172, 0.3);
}

[data-theme="sunset"] .cursor-dot {
    background: #f97316;
}

[data-theme="sunset"] .cursor-outline {
    border-color: rgba(249, 115, 22, 0.3);
}

[data-theme="caramellatte"] .cursor-dot {
    background: #d97706;
}

[data-theme="caramellatte"] .cursor-outline {
    border-color: rgba(217, 119, 6, 0.3);
}

[data-theme="abyss"] .cursor-dot {
    background: #1e1b4b;
}

[data-theme="abyss"] .cursor-outline {
    border-color: rgba(30, 27, 75, 0.3);
}

[data-theme="silk"] .cursor-dot {
    background: #f3e8ff;
}

[data-theme="silk"] .cursor-outline {
    border-color: rgba(243, 232, 255, 0.3);
}

/* Responsive - hide on mobile */
@media (max-width: 768px) {
    .custom-cursor {
        display: none;
    }
}
</style>
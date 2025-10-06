<template>
    <div class="flex w-full h-full items-center justify-center">
        <img v-if="src && src.includes('.svg')" :src="src" :alt="alt" class="w-8 h-8" />
        <span v-else-if="src" class="icon-emoji">{{ src }}</span>
        <span v-else class="icon-fallback">?</span>
    </div>
</template>

<script setup>
const props = defineProps({
    src: {
        type: String,
        required: true
    },
    alt: {
        type: String,
        default: 'Icon'
    },
    size: {
        type: String,
        default: 'medium'
    }
})
</script>
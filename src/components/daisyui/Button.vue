<template>
    <button :class="buttonClasses" :disabled="disabled" @click="$emit('click', $event)">
        <slot name="icon" />
        <slot />
    </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    variant: {
        type: String,
        default: 'primary',
        validator: (value) => [
            'primary', 'secondary', 'accent', 'neutral', 'ghost', 'link',
            'info', 'success', 'warning', 'error'
        ].includes(value)
    },
    size: {
        type: String,
        default: 'md',
        validator: (value) => ['xs', 'sm', 'md', 'lg'].includes(value)
    },
    shape: {
        type: String,
        default: 'default',
        validator: (value) => ['default', 'square', 'circle'].includes(value)
    },
    outline: {
        type: Boolean,
        default: false
    },
    active: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    loading: {
        type: Boolean,
        default: false
    },
    wide: {
        type: Boolean,
        default: false
    },
    block: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['click'])

const buttonClasses = computed(() => {
    const classes = ['btn']

    // Variant
    if (props.outline) {
        classes.push(`btn-outline`)
    }
    classes.push(`btn-${props.variant}`)

    // Size
    if (props.size !== 'md') {
        classes.push(`btn-${props.size}`)
    }

    // Shape
    if (props.shape === 'square') {
        classes.push('btn-square')
    } else if (props.shape === 'circle') {
        classes.push('btn-circle')
    }

    // States
    if (props.active) {
        classes.push('btn-active')
    }

    if (props.loading) {
        classes.push('loading')
    }

    if (props.wide) {
        classes.push('btn-wide')
    }

    if (props.block) {
        classes.push('btn-block')
    }

    return classes.join(' ')
})
</script>

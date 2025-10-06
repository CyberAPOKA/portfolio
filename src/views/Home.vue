<script setup>
import { useRouter } from 'vue-router'
import Hero from '@/components/Hero.vue'
import Projects from '@/components/Projects.vue'
import Skills from '@/components/Skills.vue'
import CTA from '@/components/CTA.vue'

const router = useRouter()

const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
}

const goToContact = () => {
    router.push('/contact')
}
</script>

<template>
    <div>
        <Hero @scroll-to-projects="scrollToProjects" />
        <Projects />
        <Skills />
        <CTA @go-to-contact="goToContact" />
    </div>
</template>
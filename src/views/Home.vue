<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Button from '@/components/daisyui/Button.vue'
import Card from '@/components/daisyui/Card.vue'

const router = useRouter()

const projects = ref([
    {
        id: 1,
        title: 'E-commerce Platform',
        description: 'A full-stack e-commerce solution built with Vue.js and Node.js'
    },
    {
        id: 2,
        title: 'Task Management App',
        description: 'A collaborative task management application with real-time updates'
    },
    {
        id: 3,
        title: 'Portfolio Website',
        description: 'A responsive portfolio website showcasing my work and skills'
    }
])

const skills = ref([
    { name: 'Vue.js', icon: '⚡' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'CSS', icon: '🎨' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'Git', icon: '📦' }
])

const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
}

const goToContact = () => {
    router.push('/contact')
}
</script>

<template>
    <div>
        <!-- Hero Section -->
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <h1 class="text-5xl font-bold text-primary">Welcome to My Portfolio</h1>
                    <p class="py-6 text-base-content">
                        I'm a passionate developer creating amazing web experiences with modern technologies.
                    </p>
                    <Button variant="primary" size="lg" @click="scrollToProjects">
                        View My Work
                    </Button>
                </div>
            </div>
        </div>

        <!-- Projects Section -->
        <div class="container mx-auto p-8" id="projects">
            <h2 class="text-3xl font-bold text-center mb-8 text-base-content">Featured Projects</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card v-for="project in projects" :key="project.id" :title="project.title" bordered>
                    <p class="text-base-content">{{ project.description }}</p>
                    <div class="card-actions justify-end">
                        <Button variant="primary" size="sm">View Project</Button>
                    </div>
                </Card>
            </div>
        </div>

        <!-- Skills Section -->
        <div class="container mx-auto p-8">
            <h2 class="text-3xl font-bold text-center mb-8 text-base-content">Skills & Technologies</h2>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div v-for="skill in skills" :key="skill.name" class="text-center p-4 bg-base-100 rounded-lg shadow">
                    <div class="text-2xl mb-2">{{ skill.icon }}</div>
                    <h3 class="font-semibold">{{ skill.name }}</h3>
                </div>
            </div>
        </div>

        <!-- CTA Section -->
        <div class="container mx-auto p-8">
            <div class="hero bg-base-200 rounded-lg">
                <div class="hero-content text-center">
                    <div class="max-w-md">
                        <h2 class="text-3xl font-bold text-primary">Let's Work Together</h2>
                        <p class="py-6 text-base-content">
                            Ready to bring your ideas to life? Let's discuss your next project.
                        </p>
                        <Button variant="primary" size="lg" @click="goToContact">
                            Get In Touch
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
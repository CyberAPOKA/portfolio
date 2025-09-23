<script setup>
import { ref } from 'vue'
import Button from '@/components/daisyui/Button.vue'
import Card from '@/components/daisyui/Card.vue'

const experiences = ref([
    {
        id: 1,
        title: 'Senior Frontend Developer',
        company: 'Tech Corp',
        period: '2022 - Present',
        description: 'Leading frontend development for enterprise applications using Vue.js and modern web technologies.'
    },
    {
        id: 2,
        title: 'Full Stack Developer',
        company: 'StartupXYZ',
        period: '2020 - 2022',
        description: 'Developed full-stack web applications using Vue.js, Node.js, and PostgreSQL.'
    },
    {
        id: 3,
        title: 'Junior Developer',
        company: 'Web Solutions Inc',
        period: '2019 - 2020',
        description: 'Built responsive websites and web applications using HTML, CSS, and JavaScript.'
    }
])

const certifications = ref([
    {
        id: 1,
        name: 'Vue.js Certified Developer',
        issuer: 'Vue.js Official'
    },
    {
        id: 2,
        name: 'AWS Cloud Practitioner',
        issuer: 'Amazon Web Services'
    },
    {
        id: 3,
        name: 'JavaScript Algorithms',
        issuer: 'FreeCodeCamp'
    },
    {
        id: 4,
        name: 'Responsive Web Design',
        issuer: 'FreeCodeCamp'
    }
])
</script>

<template>
    <div class="max-w-4xl mx-auto">
        <!-- About Hero -->
        <div class="hero bg-base-200 rounded-lg mb-8">
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <h1 class="text-4xl font-bold text-primary">About Me</h1>
                    <p class="py-6 text-base-content">
                        Passionate developer with a love for creating innovative solutions
                    </p>
                </div>
            </div>
        </div>

        <!-- About Content -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div>
                <h2 class="text-2xl font-bold mb-4 text-base-content">My Story</h2>
                <p class="text-base-content mb-4">
                    I'm a passionate full-stack developer with over 5 years of experience in creating
                    web applications that make a difference. My journey began with a curiosity about
                    how websites work, and it has evolved into a career dedicated to building
                    innovative solutions.
                </p>
                <p class="text-base-content mb-4">
                    I specialize in modern JavaScript frameworks, particularly Vue.js and React,
                    and I'm always eager to learn new technologies and improve my skills.
                </p>
                <p class="text-base-content">
                    When I'm not coding, you can find me exploring new technologies, contributing
                    to open-source projects, or sharing knowledge with the developer community.
                </p>
            </div>

            <div>
                <h2 class="text-2xl font-bold mb-4 text-base-content">Experience</h2>
                <div class="space-y-4">
                    <div v-for="experience in experiences" :key="experience.id"
                        class="p-4 bg-base-100 rounded-lg shadow">
                        <h3 class="font-semibold text-primary">{{ experience.title }}</h3>
                        <p class="text-sm text-base-content opacity-70">{{ experience.company }} • {{ experience.period
                            }}</p>
                        <p class="text-base-content mt-2">{{ experience.description }}</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Education -->
        <div class="mb-8">
            <h2 class="text-2xl font-bold mb-4 text-base-content">Education</h2>
            <Card title="Computer Science Degree" bordered>
                <p class="text-base-content">
                    Bachelor's degree in Computer Science from University of Technology.
                    Specialized in software engineering and web development.
                </p>
                <div class="card-actions justify-end">
                    <Button variant="outline" size="sm">View Certificate</Button>
                </div>
            </Card>
        </div>

        <!-- Certifications -->
        <div class="mb-8">
            <h2 class="text-2xl font-bold mb-4 text-base-content">Certifications</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card v-for="cert in certifications" :key="cert.id" :title="cert.name" compact>
                    <p class="text-sm text-base-content">{{ cert.issuer }}</p>
                    <div class="card-actions justify-end">
                        <Button variant="ghost" size="sm">View</Button>
                    </div>
                </Card>
            </div>
        </div>

        <!-- Fun Facts -->
        <div class="mb-8">
            <h2 class="text-2xl font-bold mb-4 text-base-content">Fun Facts</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="text-center p-4 bg-base-100 rounded-lg shadow">
                    <div class="text-3xl mb-2">☕</div>
                    <h3 class="font-semibold">Coffee Lover</h3>
                    <p class="text-sm text-base-content opacity-70">Fueled by caffeine</p>
                </div>
                <div class="text-center p-4 bg-base-100 rounded-lg shadow">
                    <div class="text-3xl mb-2">🎮</div>
                    <h3 class="font-semibold">Gamer</h3>
                    <p class="text-sm text-base-content opacity-70">Strategy games enthusiast</p>
                </div>
                <div class="text-center p-4 bg-base-100 rounded-lg shadow">
                    <div class="text-3xl mb-2">📚</div>
                    <h3 class="font-semibold">Bookworm</h3>
                    <p class="text-sm text-base-content opacity-70">Always learning</p>
                </div>
            </div>
        </div>
    </div>
</template>
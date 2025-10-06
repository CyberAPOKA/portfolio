import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layouts/AppLayout.vue'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'

const routes = [
    {
        path: '/',
        component: AppLayout,
        children: [
            { path: '', name: 'Home', component: Home },
            { path: 'about', name: 'About', component: About },
            { path: 'contact', name: 'Contact', component: Contact }
        ]
    }
]

const router = createRouter({
    history: createWebHistory('/portfolio/'),
    routes
})

export default router

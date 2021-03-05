import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/components/Main'
import PrivacyPolicy from '@/components/PrivacyPolicy'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Main
    },
    {
        path: '/lode-privacy-policy',
        name: 'privacy-policy',
        component: PrivacyPolicy
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'App',
        component: () => import('../components/HelloWorld.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: () => import('views/home/home.vue')
    },
    {
        path: '/classify',
        component: () => import('views/classify/classify.vue')
    },
    {
        path: '/cart',
        component: () => import('views/cart/cart.vue')
    },
    {
        path: '/profile',
        component: () => import('views/profile/profile.vue')
    }
]
const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
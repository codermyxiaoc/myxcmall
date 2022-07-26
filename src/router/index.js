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
        component: () => import('views/home/home.vue'),
        meta: {
            title: "首页"
        }
    },
    {
        path: '/classify',
        component: () => import('views/classify/classify.vue'),
        meta: {
            title: "分类"
        }
    },
    {
        path: '/cart',
        component: () => import('views/cart/cart.vue'),
        meta: {
            title: "购物车"
        }
    },
    {
        path: '/profile',
        component: () => import('views/profile/profile.vue'),
        meta: {
            title: "我的"
        }
    },
    {
        path: '/detail',
        component: () => import('views/detail/detail.vue'),
        meta: {
            title: "商品详情页"
        }
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})
router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
})
export default router
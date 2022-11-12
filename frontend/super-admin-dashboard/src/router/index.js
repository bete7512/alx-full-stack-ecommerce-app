import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Signup from '../pages/Signup.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { layout: 'main' }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { layout: 'empty' }

    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup,
      meta: { layout: 'empty' }
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../pages/Products/Products.vue'),
      meta: { layout: 'main' }
    },
    {
      path: '/addnewproduct',
      name: 'addnewproduct',
      component: () => import('../pages/Products/AddnewProduct.vue'),
      meta: { layout: 'main' }
    },
    {
      path: '/transactions',
      name: 'transactions',
      component: () => import('../pages/Products/Transaction.vue'),
      meta: { layout: 'main' }
    },
    {
      path: '/orders',
      name: 'orders',
      component: () => (import('../pages/Products/Order.vue')),
      meta: { layout: 'main' }
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => (import('../pages/Profile.vue')),
      meta: { layout: 'main' }
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => (import('../pages/Message.vue')),
      meta: { layout: 'main' }
    }
  ]
})

export default router

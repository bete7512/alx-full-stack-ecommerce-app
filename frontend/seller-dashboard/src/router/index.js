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
      meta:{layout:'empty'}

    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup,
      meta:{layout:'empty'}

    }
  ]
})

export default router

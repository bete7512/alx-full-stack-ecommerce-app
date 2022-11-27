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
      component: () => import('../pages/Product.vue'),
      meta: { layout: 'main' }
    },
    {
      path: '/sellers',
      name: 'sellers',
      component: () => import('../pages/Seller.vue'),
      meta: { layout: 'main' }
    },
    {
      path: '/deliveryagents',
      name: 'deliveryagents',
      component: () => import('../pages/Deliver.vue'),
      meta: { layout: 'main' }
    },
    {
      path: '/orders',
      name: 'orders',
      component: () => (import('../pages/Order.vue')),
      meta: { layout: 'main' }
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => (import('../pages/Profile.vue')),
      meta: { layout: 'main' }
    },
    {
      path:'/customers',
      name:'customers',
      component: () => (import('../pages/Buyer.vue')),
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
router.beforeEach(async (to) => {
  const publicPages = ['/login', '/signup'];
  const authRequired = !publicPages.includes(to.path);
  if (authRequired && !window.localStorage.getItem("Apollotoken")) {
    // returnUrl = to.fullPath;
    return '/login';
  }
});
export default router

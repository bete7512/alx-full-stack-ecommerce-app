import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Signup from '../pages/Signup.vue'
import Main from '../pages/Main.vue'
import Cart from '../pages/Cart.vue'
import Landing from '../pages/Landing.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing,
      meta: { layout: "empty" },
    },
    {
      path: '/',
      name: 'main',
      component: Main,
      meta: { layout: "main" },
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home,
          meta: { layout: "main" },
        },
        {
          path:'/product/:id',
          name:'productdetails',
          component:()=>import('../pages/ProductDetail.vue'),
          meta: { layout: "main" }
    
        },

      ]
    },
    {
      path: '/login',
      name: 'login',
      beforeRouteEnter (to, from, next) {
        // ...
      },
      component: Login,
      meta: { layout: "empty" },
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup,
      meta: { layout: "empty" },
    },
    {
      path:'/carts',
      name:'cart',
      component:Cart,
      meta: { layout: "main" },
          beforeEnter: (to, from, next) => {
        if (localStorage.getItem('Apollotoken')) {
          next()
        } else {
          next('/login')
        }
      }

    }

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router

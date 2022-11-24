import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Signup from '../pages/Signup.vue'
import orders from '../pages/orders.vue'
import Message from '../pages/Message.vue'
import instanceMessage from '../pages/instanceMessage.vue'
import messageDetail from '../pages/MessageDetail.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'order',
      component: orders,
      meta:{layout:'main'}
    },
    {
      path:'/orders',
      name:'orders',
      component:orders,
      meta:{layout:'main'}
    },
    {
      path: '/login',
      name: 'login',
      component:Login,
      meta:{layout:'empty'}
    },
    {
      path:'/messagedetail/:id',
      name:'messagedetail',
      component:messageDetail,
      meta:{layout:'main'}
    },
     {
      path: '/signup',
      name: 'signup',
      component: Signup,
      meta:{layout:'empty'}
    },
    {
      path: '/message',
      name: 'message',
      component: Message,
      meta:{layout:'main'}
    },
    {
      path: '/instanceMessage',
      name: 'instanceMessage',
      component: instanceMessage,
      meta:{layout:'main'}
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

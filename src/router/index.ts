import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import Mypage from '../views/mypage.vue'
import AboutMe from '../views/AboutMe.vue'
import Photographs from '@/views/photographs.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About Me',
      component: AboutMe
    },
    {
      path: '/my-photos',
      name: 'My Photographs',
      component: Photographs
    },
    {
      path: '/my-projects',
      name: 'My Projects',
      component: Mypage
    }
    /* {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    } */
  ]
})

export default router

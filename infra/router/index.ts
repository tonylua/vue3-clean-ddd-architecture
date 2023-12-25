import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/feature-foo/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/feature-foo/views/AboutView.vue')
    }
  ]
})

export default router

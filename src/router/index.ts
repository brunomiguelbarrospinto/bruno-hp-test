import { createRouter, createWebHistory } from 'vue-router'

import AnotherView from '../views/AnotherView.vue'
import HomeView from '../views/HomeView.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/another',
    name: 'another',
    component: AnotherView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

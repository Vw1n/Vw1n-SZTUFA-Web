// router/index.js
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import path from 'node:path'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ()=> import('@/components/Home.vue')
  },
  {
    path: '/Match',
    name: 'Match',
    component: () => import('@/components/Match.vue')
  },
  {
    path: '/Community',
    name: 'Community',
    component: () => import('@/components/Community.vue')
  },
  {
    path: '/activity',
    name: 'Activity',
    component: () => import('@/components/Activity.vue')
  },
  {
    path: '/schoolTeam',
    name: 'SchoolTeam',
    component: () => import('@/components/SchoolTeam.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(), 
  routes
})
export default router

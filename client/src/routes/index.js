// src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Search from '../components/Search.vue'

// กำหนด routes
const routes = [
  {
    path: '/', 
    name: 'Home',
    component: Home 
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes 
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/loans',
      name: 'loans',
      component: () => import('../views/LoansView.vue'), // To be created
    },
    // Additional routes from sidebar would be added here...
  ],
})

export default router

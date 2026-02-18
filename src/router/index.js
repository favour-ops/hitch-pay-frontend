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
      // Ensure this file actually exists in src/views/LoansView.vue
      component: () => import('../views/LoansView.vue'),
    },
    {
      path: '/services',
      name: 'services',
      // Ensure this file actually exists in src/views/ServicesView.vue
      component: () => import('../views/ServicesView.vue'),
    },
    // Placeholder routes to prevent errors when clicking sidebar links
    { path: '/transactions', component: HomeView },
    { path: '/invoices', component: HomeView },
    { path: '/disputes', component: HomeView },
    { path: '/payment-link', component: HomeView },
    { path: '/pos', component: HomeView },
    { path: '/transfers', component: HomeView },
    { path: '/bills', component: HomeView },
    { path: '/savings', component: HomeView },
    { path: '/staffs', component: HomeView },
    { path: '/settings', component: HomeView },
  ],
})

export default router

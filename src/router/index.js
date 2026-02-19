import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/loans', name: 'loans', component: () => import('../views/LoansView.vue') },
    { path: '/services', name: 'services', component: () => import('../views/ServicesView.vue') },
    {
      path: '/transactions',
      name: 'transactions',
      component: () => import('../views/TransactionsView.vue'),
    },
    { path: '/staffs', name: 'staffs', component: () => import('../views/StaffsView.vue') },
    { path: '/settings', name: 'settings', component: () => import('../views/SettingsView.vue') },
    // Placeholder routes to prevent errors when clicking sidebar links
    { path: '/invoices', component: HomeView },
    { path: '/disputes', component: HomeView },
    { path: '/payment-link', component: HomeView },
    { path: '/pos', component: HomeView },
    { path: '/transfers', component: HomeView },
    { path: '/bills', component: HomeView },
    { path: '/savings', component: HomeView },
  ],
})

export default router

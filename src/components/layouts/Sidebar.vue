<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <aside
    class="w-64 bg-[#f9f5ff] dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col h-screen shrink-0 transition-colors duration-300"
  >
    <div class="p-6">
      <div class="flex items-center gap-2 mb-8">
        <div
          class="w-8 h-8 bg-brand-purple rounded-lg flex items-center justify-center text-white font-bold"
        >
          H
        </div>
        <span class="text-xl font-bold text-brand-purple-dark dark:text-white"
          >hitch <span class="font-normal text-sm block -mt-2">pay</span></span
        >
      </div>

      <div
        class="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors"
      >
        <p class="text-sm font-bold text-gray-800 dark:text-white">Business Name</p>
        <p class="text-xs text-gray-400 dark:text-gray-400">Business ID - 123421</p>
        <span
          class="mt-2 inline-block px-2 py-1 text-[10px] bg-[#9B51E0] text-white rounded font-medium"
        >
          Business Owner - Tier 1
        </span>
      </div>
    </div>

    <nav class="flex-1 overflow-y-auto px-4 space-y-6 pb-6">
      <div class="space-y-1">
        <RouterLink
          to="/"
          active-class="bg-white dark:bg-gray-800 text-brand-purple dark:text-brand-purple-light shadow-sm"
          class="flex items-center px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 rounded-lg transition-colors hover:bg-white dark:hover:bg-gray-800 hover:text-brand-purple dark:hover:text-brand-purple-light"
        >
          Dashboard
        </RouterLink>
        <RouterLink
          to="/business"
          active-class="bg-white dark:bg-gray-800 text-brand-purple dark:text-brand-purple-light shadow-sm"
          class="flex items-center px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 rounded-lg transition-colors hover:bg-white dark:hover:bg-gray-800 hover:text-brand-purple dark:hover:text-brand-purple-light"
        >
          My Business
        </RouterLink>
        <RouterLink
          to="/services"
          active-class="bg-white dark:bg-gray-800 text-brand-purple dark:text-brand-purple-light shadow-sm"
          class="flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 rounded-lg transition-colors hover:bg-white dark:hover:bg-gray-800 hover:text-brand-purple dark:hover:text-brand-purple-light"
        >
          <span>Services and Items</span>
          <span class="text-xs">›</span>
        </RouterLink>
      </div>

      <div class="space-y-1">
        <p class="px-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Payments</p>
        <RouterLink
          to="/transactions"
          active-class="bg-white dark:bg-gray-800 text-brand-purple dark:text-brand-purple-light shadow-sm"
          class="flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 rounded-lg transition-colors hover:bg-white dark:hover:bg-gray-800 hover:text-brand-purple dark:hover:text-brand-purple-light"
        >
          <span>Transactions</span>
          <span class="text-xs">›</span>
        </RouterLink>
        <RouterLink
          to="/invoices"
          active-class="bg-white dark:bg-gray-800 text-brand-purple dark:text-brand-purple-light shadow-sm"
          class="flex items-center px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 rounded-lg transition-colors hover:bg-white dark:hover:bg-gray-800 hover:text-brand-purple dark:hover:text-brand-purple-light"
        >
          Invoices
        </RouterLink>
        <RouterLink
          to="/disputes"
          active-class="bg-white dark:bg-gray-800 text-brand-purple dark:text-brand-purple-light shadow-sm"
          class="flex items-center px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 rounded-lg transition-colors hover:bg-white dark:hover:bg-gray-800 hover:text-brand-purple dark:hover:text-brand-purple-light"
        >
          Disputes
        </RouterLink>
        <RouterLink
          to="/payment-link"
          active-class="bg-white dark:bg-gray-800 text-brand-purple dark:text-brand-purple-light shadow-sm"
          class="flex items-center px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 rounded-lg transition-colors hover:bg-white dark:hover:bg-gray-800 hover:text-brand-purple dark:hover:text-brand-purple-light"
        >
          Payment Link
        </RouterLink>
        <RouterLink
          to="/pos"
          active-class="bg-white dark:bg-gray-800 text-brand-purple dark:text-brand-purple-light shadow-sm"
          class="flex items-center px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 rounded-lg transition-colors hover:bg-white dark:hover:bg-gray-800 hover:text-brand-purple dark:hover:text-brand-purple-light"
        >
          POS Terminals
        </RouterLink>
      </div>

      <div class="space-y-1">
        <p class="px-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
          Banking Services
        </p>
        <RouterLink
          to="/transfers"
          active-class="bg-white dark:bg-gray-800 text-brand-purple dark:text-brand-purple-light shadow-sm"
          class="flex items-center px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 rounded-lg transition-colors hover:bg-white dark:hover:bg-gray-800 hover:text-brand-purple dark:hover:text-brand-purple-light"
        >
          Transfers
        </RouterLink>
        <RouterLink
          to="/bills"
          active-class="bg-white dark:bg-gray-800 text-brand-purple dark:text-brand-purple-light shadow-sm"
          class="flex items-center px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 rounded-lg transition-colors hover:bg-white dark:hover:bg-gray-800 hover:text-brand-purple dark:hover:text-brand-purple-light"
        >
          Bills Payment
        </RouterLink>
        <RouterLink
          to="/savings"
          active-class="bg-white dark:bg-gray-800 text-brand-purple dark:text-brand-purple-light shadow-sm"
          class="flex items-center px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 rounded-lg transition-colors hover:bg-white dark:hover:bg-gray-800 hover:text-brand-purple dark:hover:text-brand-purple-light"
        >
          Savings
        </RouterLink>
        <RouterLink
          to="/loans"
          active-class="bg-white dark:bg-gray-800 text-brand-purple dark:text-brand-purple-light shadow-sm"
          class="flex items-center px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 rounded-lg transition-colors hover:bg-white dark:hover:bg-gray-800 hover:text-brand-purple dark:hover:text-brand-purple-light"
        >
          Loans
        </RouterLink>
      </div>
    </nav>

    <div class="p-4 border-t border-gray-200 dark:border-gray-800 space-y-1">
      <RouterLink
        to="/staffs"
        active-class="bg-white dark:bg-gray-800 text-brand-purple dark:text-brand-purple-light shadow-sm"
        class="flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 rounded-lg transition-colors hover:bg-white dark:hover:bg-gray-800 hover:text-brand-purple dark:hover:text-brand-purple-light"
      >
        <span>Staffs</span>
        <span class="text-xs">›</span>
      </RouterLink>
      <RouterLink
        to="/settings"
        active-class="bg-white dark:bg-gray-800 text-brand-purple dark:text-brand-purple-light shadow-sm"
        class="flex items-center px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 rounded-lg transition-colors hover:bg-white dark:hover:bg-gray-800 hover:text-brand-purple dark:hover:text-brand-purple-light"
      >
        Settings
      </RouterLink>
      <button
        class="w-full text-left text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors"
      >
        Log out
      </button>
    </div>
  </aside>
</template>

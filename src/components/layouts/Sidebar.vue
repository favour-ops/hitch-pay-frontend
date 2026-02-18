<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <aside class="w-64 bg-brand-lavender border-r border-gray-200 flex flex-col h-screen shrink-0">
    <div class="p-6">
      <div class="flex items-center gap-2 mb-8">
        <div
          class="w-8 h-8 bg-brand-purple rounded-lg flex items-center justify-center text-white font-bold"
        >
          H
        </div>
        <span class="text-xl font-bold text-brand-purple-dark"
          >hitch <span class="font-normal text-sm block -mt-2">pay</span></span
        >
      </div>

      <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <p class="text-sm font-bold text-gray-800">Business Name</p>
        <p class="text-xs text-gray-400">Business ID - 123421</p>
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
          active-class="bg-white text-brand-purple shadow-sm"
          class="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-lg transition-colors hover:bg-white hover:text-brand-purple"
        >
          Dashboard
        </RouterLink>
        <RouterLink
          to="/business"
          active-class="bg-white text-brand-purple shadow-sm"
          class="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-lg transition-colors hover:bg-white hover:text-brand-purple"
        >
          My Business
        </RouterLink>
        <RouterLink
          to="/services"
          active-class="bg-white text-brand-purple shadow-sm"
          class="flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-600 rounded-lg transition-colors hover:bg-white hover:text-brand-purple"
        >
          <span>Services and Items</span>
          <span class="text-xs">›</span>
        </RouterLink>
      </div>

      <div class="space-y-1">
        <p class="px-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Payments</p>
        <RouterLink
          to="/transactions"
          active-class="bg-white text-brand-purple shadow-sm"
          class="flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-600 rounded-lg transition-colors hover:bg-white hover:text-brand-purple"
        >
          <span>Transactions</span>
          <span class="text-xs">›</span>
        </RouterLink>
        <RouterLink
          to="/invoices"
          active-class="bg-white text-brand-purple shadow-sm"
          class="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-lg transition-colors hover:bg-white hover:text-brand-purple"
        >
          Invoices
        </RouterLink>
        <RouterLink
          to="/disputes"
          active-class="bg-white text-brand-purple shadow-sm"
          class="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-lg transition-colors hover:bg-white hover:text-brand-purple"
        >
          Disputes
        </RouterLink>
        <RouterLink
          to="/payment-link"
          active-class="bg-white text-brand-purple shadow-sm"
          class="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-lg transition-colors hover:bg-white hover:text-brand-purple"
        >
          Payment Link
        </RouterLink>
        <RouterLink
          to="/pos"
          active-class="bg-white text-brand-purple shadow-sm"
          class="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-lg transition-colors hover:bg-white hover:text-brand-purple"
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
          active-class="bg-white text-brand-purple shadow-sm"
          class="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-lg transition-colors hover:bg-white hover:text-brand-purple"
        >
          Transfers
        </RouterLink>
        <RouterLink
          to="/bills"
          active-class="bg-white text-brand-purple shadow-sm"
          class="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-lg transition-colors hover:bg-white hover:text-brand-purple"
        >
          Bills Payment
        </RouterLink>
        <RouterLink
          to="/savings"
          active-class="bg-white text-brand-purple shadow-sm"
          class="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-lg transition-colors hover:bg-white hover:text-brand-purple"
        >
          Savings
        </RouterLink>
        <RouterLink
          to="/loans"
          active-class="bg-white text-brand-purple shadow-sm"
          class="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-lg transition-colors hover:bg-white hover:text-brand-purple"
        >
          Loans
        </RouterLink>
      </div>
    </nav>

    <div class="p-4 border-t border-gray-200 space-y-1">
      <RouterLink
        to="/staffs"
        active-class="bg-white text-brand-purple shadow-sm"
        class="flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-600 rounded-lg transition-colors hover:bg-white hover:text-brand-purple"
      >
        <span>Staffs</span>
        <span class="text-xs">›</span>
      </RouterLink>
      <RouterLink
        to="/settings"
        active-class="bg-white text-brand-purple shadow-sm"
        class="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-lg transition-colors hover:bg-white hover:text-brand-purple"
      >
        Settings
      </RouterLink>
      <button
        class="w-full text-left text-red-500 hover:bg-red-50 flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors"
      >
        Log out
      </button>
    </div>
  </aside>
</template>

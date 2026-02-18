<script setup>
import { RouterLink } from 'vue-router'
// Note: Icon components would be imported here after installing lucide-vue-next
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
        <RouterLink to="/" class="nav-item active">Dashboard</RouterLink>
        <RouterLink to="/business" class="nav-item">My Business</RouterLink>
        <RouterLink to="/services" class="nav-item flex justify-between items-center">
          <span>Services and Items</span>
          <span class="text-xs">›</span>
        </RouterLink>
      </div>

      <div class="space-y-1">
        <p class="px-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Payments</p>
        <RouterLink to="/transactions" class="nav-item flex justify-between items-center">
          <span>Transactions</span>
          <span class="text-xs">›</span>
        </RouterLink>
        <RouterLink to="/invoices" class="nav-item">Invoices</RouterLink>
        <RouterLink to="/disputes" class="nav-item">Disputes</RouterLink>
        <RouterLink to="/payment-link" class="nav-item">Payment Link</RouterLink>
        <RouterLink to="/pos" class="nav-item">POS Terminals</RouterLink>
      </div>

      <div class="space-y-1">
        <p class="px-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
          Banking Services
        </p>
        <RouterLink to="/transfers" class="nav-item">Transfers</RouterLink>
        <RouterLink to="/bills" class="nav-item">Bills Payment</RouterLink>
        <RouterLink to="/savings" class="nav-item">Savings</RouterLink>
        <RouterLink to="/loans" class="nav-item">Loans</RouterLink>
      </div>
    </nav>

    <div class="p-4 border-t border-gray-200 space-y-1">
      <RouterLink to="/staffs" class="nav-item flex justify-between items-center">
        <span>Staffs</span>
        <span class="text-xs">›</span>
      </RouterLink>
      <RouterLink to="/settings" class="nav-item">Settings</RouterLink>
      <button class="nav-item w-full text-left text-red-500 hover:bg-red-50">Log out</button>
    </div>
  </aside>
</template>

<style scoped>
.nav-item {
  @apply flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-lg transition-colors hover:bg-white hover:text-brand-purple;
}
.nav-item.active {
  @apply bg-white text-brand-purple shadow-sm;
}
</style>

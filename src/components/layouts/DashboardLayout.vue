<script setup>
// FIXED: Added 's' to layout matching your folder structure
import Sidebar from '@/components/layouts/Sidebar.vue'
</script>

<template>
  <div class="flex h-screen overflow-hidden bg-layout-bg">
    <Sidebar />

    <div class="flex flex-col flex-1 min-w-0 overflow-hidden">
      <header
        class="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 shrink-0"
      >
        <div class="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search anything"
            class="w-full bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple"
          />
        </div>

        <div class="flex items-center gap-4">
          <button class="p-2 text-gray-400 hover:bg-gray-100 rounded-full relative">
            <span
              class="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"
            ></span>
            <span class="sr-only">Notifications</span>
            🔔
          </button>
          <button class="p-2 text-gray-400 hover:bg-gray-100 rounded-full">🚪</button>
        </div>
      </header>

      <main class="flex-1 overflow-y-auto p-8">
        <div class="max-w-7xl mx-auto">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>

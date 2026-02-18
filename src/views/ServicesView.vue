<script setup>
import { ref } from 'vue'

const activeTab = ref('Items') // Items or Categories

// Mock Data
const items = [
  { id: 1, name: 'Wrist watch', category: 'Watches', amount: '₦24,000', stock: '---' },
  { id: 2, name: 'Leather Wallet', category: 'Accessories', amount: '₦8,500', stock: '---' },
]

const categories = [
  { id: 1, name: 'Watches', items: 3 },
  { id: 2, name: 'Medical', items: 6 },
]
</script>

<template>
  <div class="space-y-6">
    <div class="flex justify-between items-center">
      <h2 class="text-xl font-bold text-gray-800">
        {{ activeTab === 'Items' ? 'Items Library' : 'Categories' }}
      </h2>
      <div class="flex bg-gray-100 p-1 rounded-lg">
        <button
          @click="activeTab = 'Items'"
          :class="[
            'px-4 py-1.5 text-xs font-medium rounded-md transition-all',
            activeTab === 'Items' ? 'bg-white shadow-sm text-gray-800' : 'text-gray-500',
          ]"
        >
          Items
        </button>
        <button
          @click="activeTab = 'Categories'"
          :class="[
            'px-4 py-1.5 text-xs font-medium rounded-md transition-all',
            activeTab === 'Categories' ? 'bg-white shadow-sm text-gray-800' : 'text-gray-500',
          ]"
        >
          Categories
        </button>
      </div>
    </div>

    <div class="flex justify-between gap-4">
      <input
        type="text"
        placeholder="Find something"
        class="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm w-64 outline-none focus:border-brand-purple"
      />
      <div class="flex gap-2">
        <button
          class="border border-gray-200 bg-white text-gray-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50"
        >
          Import
        </button>
        <button
          class="bg-brand-purple text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-brand-purple-light"
        >
          + Create {{ activeTab === 'Items' ? 'Item' : 'Category' }}
        </button>
      </div>
    </div>

    <div
      v-if="activeTab === 'Items'"
      class="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm"
    >
      <table class="w-full text-left text-sm">
        <thead class="bg-gray-50 border-b border-gray-100 text-gray-400">
          <tr>
            <th class="px-6 py-4">Item</th>
            <th class="px-6 py-4">Category</th>
            <th class="px-6 py-4">Amount</th>
            <th class="px-6 py-4">Stock</th>
            <th class="px-6 py-4">Action</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-50">
          <tr v-for="item in items" :key="item.id" class="hover:bg-gray-50">
            <td class="px-6 py-4 font-medium flex items-center gap-3">
              <div class="w-8 h-8 bg-gray-200 rounded-md"></div>
              {{ item.name }}
            </td>
            <td class="px-6 py-4 text-gray-500">{{ item.category }}</td>
            <td class="px-6 py-4">{{ item.amount }}</td>
            <td class="px-6 py-4 text-gray-400">{{ item.stock }}</td>
            <td class="px-6 py-4 text-gray-400 cursor-pointer hover:text-brand-purple">···</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-else class="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
      <table class="w-full text-left text-sm">
        <thead class="bg-gray-50 border-b border-gray-100 text-gray-400">
          <tr>
            <th class="px-6 py-4">Name</th>
            <th class="px-6 py-4">Items</th>
            <th class="px-6 py-4 text-right">Action</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-50">
          <tr v-for="cat in categories" :key="cat.id" class="hover:bg-gray-50">
            <td class="px-6 py-4 font-medium flex items-center gap-3">
              <div class="w-8 h-8 bg-gray-200 rounded-md"></div>
              {{ cat.name }}
            </td>
            <td class="px-6 py-4">{{ cat.items }}</td>
            <td class="px-6 py-4 text-right text-gray-400 cursor-pointer hover:text-brand-purple">
              ···
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

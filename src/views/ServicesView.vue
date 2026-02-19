<script setup>
import { ref } from 'vue'

const activeTab = ref('Items')

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
      <h2 class="text-xl font-bold text-gray-800 dark:text-white">
        {{ activeTab === 'Items' ? 'Items Library' : 'Categories' }}
      </h2>
      <div class="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-lg transition-colors">
        <button
          @click="activeTab = 'Items'"
          :class="[
            'px-4 py-1.5 text-xs font-medium rounded-md transition-all',
            activeTab === 'Items'
              ? 'bg-white dark:bg-gray-700 shadow-sm text-gray-800 dark:text-white'
              : 'text-gray-500 dark:text-gray-400',
          ]"
        >
          Items
        </button>
        <button
          @click="activeTab = 'Categories'"
          :class="[
            'px-4 py-1.5 text-xs font-medium rounded-md transition-all',
            activeTab === 'Categories'
              ? 'bg-white dark:bg-gray-700 shadow-sm text-gray-800 dark:text-white'
              : 'text-gray-500 dark:text-gray-400',
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
        class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 text-sm w-64 outline-none focus:border-brand-purple dark:text-white placeholder-gray-400"
      />
      <div class="flex gap-2">
        <button
          class="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          Import
        </button>
        <button
          class="bg-brand-purple text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-brand-purple-light transition-colors"
        >
          + Create {{ activeTab === 'Items' ? 'Item' : 'Category' }}
        </button>
      </div>
    </div>

    <div
      class="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm transition-colors"
    >
      <table class="w-full text-left text-sm">
        <thead
          class="bg-gray-50 dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 text-gray-400 dark:text-gray-300"
        >
          <tr>
            <th class="px-6 py-4">{{ activeTab === 'Items' ? 'Item' : 'Name' }}</th>
            <th class="px-6 py-4" v-if="activeTab === 'Items'">Category</th>
            <th class="px-6 py-4" v-if="activeTab === 'Items'">Amount</th>
            <th class="px-6 py-4" v-if="activeTab === 'Items'">Stock</th>
            <th class="px-6 py-4" v-if="activeTab === 'Categories'">Items</th>
            <th class="px-6 py-4 text-right">Action</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-50 dark:divide-gray-800">
          <tr
            v-for="item in activeTab === 'Items' ? items : categories"
            :key="item.id"
            class="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <td class="px-6 py-4 font-medium flex items-center gap-3 text-gray-800 dark:text-white">
              <div class="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
              {{ item.name }}
            </td>
            <td class="px-6 py-4 text-gray-500 dark:text-gray-400" v-if="activeTab === 'Items'">
              {{ item.category }}
            </td>
            <td class="px-6 py-4 text-gray-800 dark:text-white" v-if="activeTab === 'Items'">
              {{ item.amount }}
            </td>
            <td class="px-6 py-4 text-gray-400 dark:text-gray-500" v-if="activeTab === 'Items'">
              {{ item.stock }}
            </td>
            <td class="px-6 py-4 text-gray-800 dark:text-white" v-if="activeTab === 'Categories'">
              {{ item.items }}
            </td>
            <td class="px-6 py-4 text-right text-gray-400 hover:text-brand-purple cursor-pointer">
              ···
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

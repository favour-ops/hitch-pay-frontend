<script setup>
import { ref } from 'vue'

const faculties = ref(['Medicine', 'Law', 'Technology', 'Science'])
const newFaculty = ref('')

const feeCategories = ref([
  {
    id: 1,
    name: 'Tuition Fee',
    amount: '300,000',
    dept: 'All Department',
    level: '100L',
    status: true,
  },
  {
    id: 2,
    name: 'Accommodation Fee',
    amount: '150,000',
    dept: 'All Students',
    level: '100L',
    status: true,
  },
])

const addFaculty = () => {
  if (newFaculty.value) {
    faculties.value.push(newFaculty.value)
    newFaculty.value = ''
  }
}
</script>

<template>
  <div class="space-y-8 max-w-4xl mx-auto">
    <div class="text-center">
      <h2 class="text-2xl font-bold text-gray-800">Product</h2>
      <p class="text-gray-500">Setup your faculties, departments and Program</p>
    </div>

    <div class="space-y-4">
      <label class="block text-sm font-bold text-gray-700">Faculty*</label>
      <div class="flex gap-2">
        <input
          v-model="newFaculty"
          type="text"
          placeholder="e.g., Faculty of Technology"
          class="flex-1 p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none"
        />
        <button
          @click="addFaculty"
          class="bg-brand-purple text-white px-6 py-2 rounded-xl font-bold hover:bg-brand-purple-light"
        >
          + Add
        </button>
      </div>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="f in faculties"
          :key="f"
          class="bg-gray-100 text-gray-600 px-3 py-1 rounded-lg text-xs font-medium border border-gray-200 flex items-center gap-2"
        >
          {{ f }} <button class="hover:text-red-500">×</button>
        </span>
      </div>
    </div>

    <div class="space-y-4">
      <div class="flex justify-between items-center">
        <h3 class="font-bold text-gray-800 text-lg">Fee Categories</h3>
        <button
          class="text-brand-purple border border-brand-purple px-4 py-1 rounded-xl text-xs font-bold hover:bg-brand-lavender"
        >
          + Add Fee
        </button>
      </div>

      <div class="overflow-hidden border border-gray-100 rounded-2xl bg-white shadow-sm">
        <table class="w-full text-left text-sm">
          <thead class="bg-gray-50 border-b border-gray-100 text-gray-400 font-medium">
            <tr>
              <th class="px-4 py-3">Categories</th>
              <th class="px-4 py-3">Amount (₦)</th>
              <th class="px-4 py-3">Department</th>
              <th class="px-4 py-3">Level</th>
              <th class="px-4 py-3">Status</th>
              <th class="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50">
            <tr v-for="fee in feeCategories" :key="fee.id" class="hover:bg-gray-50">
              <td class="px-4 py-4 font-medium">{{ fee.name }}</td>
              <td class="px-4 py-4">{{ fee.amount }}</td>
              <td class="px-4 py-4 text-gray-500">{{ fee.dept }}</td>
              <td class="px-4 py-4 text-gray-500">{{ fee.level }}</td>
              <td class="px-4 py-4">
                <div class="w-10 h-5 bg-brand-purple rounded-full relative cursor-pointer">
                  <div class="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
                </div>
              </td>
              <td class="px-4 py-4"><button class="text-red-400">🗑️</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

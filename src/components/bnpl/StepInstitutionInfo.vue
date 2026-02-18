<script setup>
import { reactive } from 'vue'
const form = reactive({
  name: '',
  type: '',
  country: '',
  email: '',
  contact: '',
  users: '',
  address: '',
})
</script>

<template>
  <div class="space-y-6">
    <div class="text-center mb-8">
      <h2 class="text-2xl font-bold text-gray-800">Institution Information</h2>
      <p class="text-gray-500">Provide basic details about your institution</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="md:col-span-2">
        <label class="block text-sm font-medium text-gray-700 mb-1">Institution Name*</label>
        <input
          v-model="form.name"
          type="text"
          placeholder="e.g., University of Technology"
          class="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-purple/20 outline-none"
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Institution Type*</label>
        <select
          v-model="form.type"
          class="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none"
        >
          <option value="">Select type</option>
          <option value="university">University</option>
        </select>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Country*</label>
        <select
          v-model="form.country"
          class="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none"
        >
          <option value="">Select country</option>
          <option value="NG">Nigeria</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup>
import ManagementTable from '@/components/shared/ManagementTable.vue'

const staffHeaders = ['Staff ID', 'Role', 'Email', 'Status']
const staffData = [
  {
    id: 1,
    name: 'Dr. Alan Grant',
    idTag: 'ST-001',
    department: 'Professor',
    email: 'alan@hitch.edu',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Ellie Sattler',
    idTag: 'ST-002',
    department: 'Researcher',
    email: 'ellie@hitch.edu',
    status: 'Active',
  },
]
</script>

<template>
  <div class="space-y-6">
    <div class="flex justify-between items-center">
      <h2 class="text-xl font-bold text-gray-800 dark:text-white">Staff Management</h2>
      <button
        class="bg-brand-purple text-white px-6 py-2 rounded-xl font-bold hover:bg-brand-purple-light transition-colors"
      >
        + Add New Staff
      </button>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <div
        class="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm transition-colors"
      >
        <span class="text-gray-400 dark:text-gray-500">Total Staff</span>
        <h3 class="text-2xl font-bold text-gray-800 dark:text-white mt-1">142</h3>
      </div>
      <div
        class="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm transition-colors"
      >
        <span class="text-gray-400 dark:text-gray-500">Active</span>
        <h3 class="text-2xl font-bold text-gray-800 dark:text-white mt-1">138</h3>
      </div>
    </div>

    <ManagementTable :headers="staffHeaders" :items="staffData" type="staff" />
  </div>
</template>

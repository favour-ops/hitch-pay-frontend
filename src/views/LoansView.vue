<script setup>
import { ref } from 'vue'
import DashboardOverview from './DashboardOverview.vue'
import ManagementTable from '@/components/shared/ManagementTable.vue'
import StepProductsFees from '@/components/bnpl/StepProductsFees.vue'
import BatchUpload from '@/components/shared/BatchUpload.vue'

const activeTab = ref('Overview')
const tabs = ['Overview', 'Student', 'Loan Management', 'Loan Settings']

// Mock Data for Tables
const studentHeaders = ['Student ID', 'Faculty', 'Student Name', 'Email', 'Status']
const studentData = [
  {
    id: 1,
    name: 'Emelda Omotosani',
    idTag: 'ID: 223423',
    faculty: 'Engineering',
    email: 'emelda@gmail.com',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Ethan Brown',
    idTag: 'ID: 412312',
    faculty: 'Security',
    email: 'ethan.b@gmail.com',
    status: 'Active',
  },
]

const loanHeaders = ['Loan ID', 'User ID', 'Amount', 'Repaid', 'Outstanding', 'Status']
const loanData = [
  {
    id: 1,
    name: 'Sarah Smith',
    idTag: 'LN-2023-001',
    amount: '₦150,000',
    repaid: '₦50,000',
    status: 'Active',
  },
  {
    id: 2,
    name: 'John Doe',
    idTag: 'LN-2023-002',
    amount: '₦500,000',
    repaid: '₦500,000',
    status: 'Completed',
  },
]

const showBatchUpload = ref(false)
</script>

<template>
  <div class="space-y-6">
    <div class="flex justify-between items-center">
      <div>
        <h2 class="text-xl font-bold text-gray-800">Buy Now Pay Later (BNPL)</h2>
        <p class="text-sm text-gray-400">Monitor your BNPL performance and key metrics</p>
      </div>
      <div class="flex gap-2">
        <select class="bg-white border border-gray-200 text-sm rounded-lg px-3 py-2 outline-none">
          <option>Switch Business</option>
        </select>
      </div>
    </div>

    <div class="border-b border-gray-200">
      <nav class="flex gap-8">
        <button
          v-for="tab in tabs"
          :key="tab"
          @click="activeTab = tab"
          :class="[
            'pb-4 text-sm font-medium transition-colors relative',
            activeTab === tab ? 'text-brand-purple' : 'text-gray-400 hover:text-gray-600',
          ]"
        >
          {{ tab }}
          <div
            v-if="activeTab === tab"
            class="absolute bottom-0 left-0 w-full h-0.5 bg-brand-purple rounded-t-full"
          ></div>
        </button>
      </nav>
    </div>

    <div class="min-h-[400px]">
      <DashboardOverview v-if="activeTab === 'Overview'" />

      <div v-else-if="activeTab === 'Student'" class="space-y-6">
        <div class="flex gap-4">
          <div
            class="bg-purple-50 p-4 rounded-xl flex-1 border border-purple-100 cursor-pointer hover:bg-purple-100 transition"
          >
            <h3 class="font-bold text-brand-purple">Add New Student</h3>
            <p class="text-xs text-gray-500">Register access student</p>
          </div>
          <div
            @click="showBatchUpload = !showBatchUpload"
            class="bg-green-50 p-4 rounded-xl flex-1 border border-green-100 cursor-pointer hover:bg-green-100 transition"
          >
            <h3 class="font-bold text-green-700">Upload List</h3>
            <p class="text-xs text-gray-500">Bulk upload student via CSV</p>
          </div>
        </div>

        <div v-if="showBatchUpload">
          <BatchUpload />
        </div>

        <ManagementTable :headers="studentHeaders" :items="studentData" type="student" />
      </div>

      <div v-else-if="activeTab === 'Loan Management'">
        <ManagementTable :headers="loanHeaders" :items="loanData" type="loan" />
      </div>

      <div v-else-if="activeTab === 'Loan Settings'">
        <StepProductsFees />
      </div>
    </div>
  </div>
</template>

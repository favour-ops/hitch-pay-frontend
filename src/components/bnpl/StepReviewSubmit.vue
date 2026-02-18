<script setup>
import { useLoanStore } from '@/stores/loanStore'
const loanStore = useLoanStore()

const details = [
  { label: 'Institution Name', value: loanStore.institutionInfo.name || 'University of Ibadan' },
  { label: 'Type', value: loanStore.institutionInfo.type || 'University' },
  { label: 'Contact Number', value: loanStore.institutionInfo.contact || '+234 810 039 0392' },
]
</script>

<template>
  <div class="space-y-8 max-w-2xl mx-auto">
    <div class="text-center mb-8">
      <h2 class="text-2xl font-bold text-gray-800">Review & Submit</h2>
      <p class="text-gray-500">Please review your information before submission</p>
    </div>

    <div class="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
      <h3 class="font-bold text-gray-800 mb-4">Institution Details</h3>
      <div class="space-y-4">
        <div v-for="item in details" :key="item.label" class="flex justify-between text-sm">
          <span class="text-gray-400">{{ item.label }}</span>
          <span class="text-gray-800 font-medium">{{ item.value }}</span>
        </div>
      </div>
    </div>

    <div class="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
      <div class="flex justify-between items-center mb-2">
        <h3 class="font-bold text-gray-800">Verification Status</h3>
        <span class="bg-orange-50 text-orange-500 px-3 py-1 rounded-lg text-xs font-bold">
          Pending Review
        </span>
      </div>
      <p class="text-xs text-gray-400 leading-relaxed">
        Your application will be reviewed within 2-3 business days. We'll notify you via email once
        approved.
      </p>
    </div>

    <div class="bg-green-50 p-4 rounded-xl border border-green-100">
      <p class="text-[10px] text-green-700 leading-relaxed">
        By submitting this application, you agree to our
        <a href="#" class="underline">Terms of Service</a> and
        <a href="#" class="underline">Privacy Policy</a>.
      </p>
    </div>
  </div>
</template>

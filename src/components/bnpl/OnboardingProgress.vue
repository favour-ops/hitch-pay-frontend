<script setup>
defineProps(['currentStep'])
const steps = [
  { id: 1, label: 'Basic Information' },
  { id: 2, label: 'Documents' },
  { id: 3, label: 'Products and Fees' },
  { id: 4, label: 'Verification' },
]
</script>

<template>
  <div class="flex justify-between items-start mb-12 relative px-4">
    <div
      v-for="step in steps"
      :key="step.id"
      class="flex flex-col items-center z-10 w-1/4 text-center"
    >
      <div
        :class="[
          'w-10 h-10 rounded-full flex items-center justify-center font-bold mb-2 transition-all',
          currentStep >= step.id ? 'bg-brand-purple text-white' : 'bg-gray-200 text-gray-500',
        ]"
      >
        {{ step.id }}
      </div>
      <span
        :class="[
          'text-[10px] font-bold uppercase tracking-tighter',
          currentStep >= step.id ? 'text-brand-purple' : 'text-gray-400',
        ]"
      >
        {{ step.label }}
      </span>
    </div>
    <div class="absolute top-5 left-0 w-full h-[2px] bg-gray-200 -z-0"></div>
  </div>
</template>

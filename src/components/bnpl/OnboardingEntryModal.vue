<script setup>
defineProps(['isOpen'])
defineEmits(['close', 'start'])
</script>

<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
  >
    <div class="bg-white rounded-3xl p-8 max-w-md w-full relative shadow-2xl text-center">
      <button
        @click="$emit('close')"
        class="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
      >
        ✕
      </button>

      <div class="mb-6 flex justify-center">
        <div class="w-32 h-32 bg-brand-lavender rounded-full flex items-center justify-center">
          💰
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-800 mb-4">
        Empower Your Institution with Buy Now, Pay Later
      </h2>
      <p class="text-gray-500 text-sm mb-8 leading-relaxed">
        Enable flexible payment options for your students. Manage loans, track repayments, and
        reduce financial barriers.
      </p>

      <button
        @click="$emit('start')"
        class="w-full bg-brand-purple text-white py-3 rounded-xl font-bold hover:bg-brand-purple-light transition-colors"
      >
        Get Started
      </button>
    </div>
  </div>
</template>

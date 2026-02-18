<script setup>
defineProps({
  isOpen: Boolean,
  title: String,
  description: String,
  buttonText: { type: String, default: 'Okay, Great!' },
})
defineEmits(['close'])
</script>

<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm"
  >
    <div class="bg-white rounded-3xl p-10 max-w-sm w-full relative shadow-2xl text-center">
      <div class="mb-6 flex justify-center">
        <div
          class="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce"
        >
          <span class="text-white text-3xl">✓</span>
        </div>
      </div>

      <h2 class="text-xl font-bold text-gray-800 mb-2">{{ title }}</h2>
      <p class="text-gray-400 text-sm mb-8">{{ description }}</p>

      <button
        @click="$emit('close')"
        class="w-full bg-brand-purple text-white py-3 rounded-xl font-bold hover:bg-brand-purple-light transition-all active:scale-95"
      >
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>

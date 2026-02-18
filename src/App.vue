<script setup>
import { RouterView } from 'vue-router'
// FIXED: Point to the correct location in components/layouts
import DashboardLayout from '@/components/layouts/DashboardLayout.vue'
</script>

<template>
  <DashboardLayout>
    <RouterView />
  </DashboardLayout>
</template>

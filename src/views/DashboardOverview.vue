<script setup>
// For charts, you'll need: npm install chart.js vue-chartjs
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
)

const stats = [
  { label: 'Total Loans Disbursed', value: '₦125,450,000', change: '+12.5%', icon: '💰' },
  { label: 'Active Loans', value: '432', change: '+5.2%', icon: '📄' },
  { label: 'Total Repaid', value: '₦89,200,000', change: '+20.1%', icon: '📈' },
]

const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Disbursed',
      data: [1000000, 1500000, 1200000, 2000000, 2500000, 3000000],
      fill: true,
      borderColor: '#4c1d95',
      backgroundColor: 'rgba(76, 29, 149, 0.1)',
      tension: 0.4,
    },
  ],
}
</script>

<template>
  <div class="space-y-8">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm"
      >
        <div class="flex justify-between items-start mb-4">
          <span class="text-gray-400 text-sm font-medium">{{ stat.label }}</span>
          <span class="p-2 bg-brand-lavender rounded-lg text-xs">{{ stat.icon }}</span>
        </div>
        <div class="flex items-baseline gap-2">
          <h3 class="text-2xl font-bold text-gray-800">{{ stat.value }}</h3>
          <span class="text-green-500 text-[10px] font-bold">{{ stat.change }}</span>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[400px]">
      <div
        class="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col"
      >
        <h3 class="font-bold text-gray-800 mb-6">Monthly Trends</h3>
        <div class="flex-1">
          <Line :data="chartData" :options="{ responsive: true, maintainAspectRatio: false }" />
        </div>
      </div>

      <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
        <h3 class="font-bold text-gray-800 mb-6">Loan Status</h3>
        <div class="space-y-4">
          <div class="flex justify-between text-xs">
            <span class="text-gray-400">Active</span>
            <span class="font-bold">432</span>
          </div>
          <div class="flex justify-between text-xs">
            <span class="text-gray-400">Completed</span>
            <span class="font-bold">1,248</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

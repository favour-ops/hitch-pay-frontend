<script setup>
defineProps({
  headers: Array,
  items: Array,
  type: String, // 'student' or 'staff'
})
</script>

<template>
  <div class="overflow-hidden border border-gray-100 rounded-2xl bg-white shadow-sm">
    <table class="w-full text-left text-sm">
      <thead class="bg-gray-50 border-b border-gray-100 text-gray-400 font-medium">
        <tr>
          <th v-for="header in headers" :key="header" class="px-4 py-4">{{ header }}</th>
          <th class="px-4 py-4 text-right">Action</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-50">
        <tr v-for="item in items" :key="item.id" class="hover:bg-gray-50 transition-colors">
          <td class="px-4 py-4">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                <img :src="item.avatar" v-if="item.avatar" class="w-full h-full object-cover" />
              </div>
              <div class="flex flex-col">
                <span class="font-bold text-gray-800">{{ item.name }}</span>
                <span class="text-[10px] text-gray-400">{{ item.idTag }}</span>
              </div>
            </div>
          </td>
          <td class="px-4 py-4 text-gray-500">{{ item.department || item.faculty }}</td>
          <td class="px-4 py-4 text-gray-500">{{ item.email }}</td>
          <td class="px-4 py-4">
            <span
              :class="[
                'px-2 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 w-max',
                item.status === 'Active'
                  ? 'bg-green-50 text-green-500'
                  : 'bg-gray-50 text-gray-400',
              ]"
            >
              <span class="w-1 h-1 rounded-full bg-current"></span>
              {{ item.status }}
            </span>
          </td>
          <td class="px-4 py-4 text-right">
            <button class="text-gray-400 hover:text-brand-purple font-bold text-xl">···</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

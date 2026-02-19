<script setup>
const transactions = [
  {
    id: 1,
    type: 'Transfer',
    amount: '₦150,000',
    status: 'Success',
    date: 'Feb 12, 2024',
    ref: 'TRX-9982',
  },
  {
    id: 2,
    type: 'Bill Payment',
    amount: '₦20,000',
    status: 'Pending',
    date: 'Feb 11, 2024',
    ref: 'TRX-9981',
  },
  {
    id: 3,
    type: 'Loan Repayment',
    amount: '₦50,000',
    status: 'Success',
    date: 'Feb 10, 2024',
    ref: 'TRX-9980',
  },
]
</script>

<template>
  <div class="space-y-6">
    <div class="flex justify-between items-center">
      <h2 class="text-xl font-bold text-gray-800 dark:text-white">Transactions</h2>
      <button
        class="border border-border-color bg-surface text-gray-600 dark:text-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-layout-bg"
      >
        Export CSV
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-surface p-6 rounded-2xl border border-border-color shadow-sm">
        <p class="text-gray-400 text-xs font-bold uppercase">Total Inflow</p>
        <h3 class="text-2xl font-bold text-gray-800 dark:text-white mt-1">₦4,250,000</h3>
      </div>
      <div class="bg-surface p-6 rounded-2xl border border-border-color shadow-sm">
        <p class="text-gray-400 text-xs font-bold uppercase">Total Outflow</p>
        <h3 class="text-2xl font-bold text-gray-800 dark:text-white mt-1">₦1,050,000</h3>
      </div>
    </div>

    <div class="bg-surface border border-border-color rounded-2xl overflow-hidden shadow-sm">
      <table class="w-full text-left text-sm">
        <thead class="bg-layout-bg border-b border-border-color text-gray-400">
          <tr>
            <th class="px-6 py-4">Reference</th>
            <th class="px-6 py-4">Type</th>
            <th class="px-6 py-4">Amount</th>
            <th class="px-6 py-4">Date</th>
            <th class="px-6 py-4">Status</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-border-color">
          <tr
            v-for="trx in transactions"
            :key="trx.id"
            class="hover:bg-layout-bg transition-colors"
          >
            <td class="px-6 py-4 font-medium text-gray-800 dark:text-white">{{ trx.ref }}</td>
            <td class="px-6 py-4 text-gray-500 dark:text-gray-400">{{ trx.type }}</td>
            <td class="px-6 py-4 text-gray-800 dark:text-white font-bold">{{ trx.amount }}</td>
            <td class="px-6 py-4 text-gray-500 dark:text-gray-400">{{ trx.date }}</td>
            <td class="px-6 py-4">
              <span
                :class="[
                  'px-2 py-1 rounded-full text-xs font-bold',
                  trx.status === 'Success'
                    ? 'bg-green-100 text-green-600'
                    : 'bg-yellow-100 text-yellow-600',
                ]"
              >
                {{ trx.status }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

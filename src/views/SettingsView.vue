<template>
  <div class="max-w-4xl space-y-8">
    <h2 class="text-xl font-bold text-gray-800 dark:text-white">Settings</h2>

    <div class="bg-surface border border-border-color rounded-2xl p-8 space-y-6">
      <div class="border-b border-border-color pb-4">
        <h3 class="text-lg font-bold text-gray-800 dark:text-white">Profile Information</h3>
        <p class="text-sm text-gray-400">
          Update your account's profile information and email address.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >Business Name</label
          >
          <input
            type="text"
            value="Hitch Pay University"
            class="w-full p-3 bg-layout-bg border border-border-color rounded-xl outline-none dark:text-white"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >Email Address</label
          >
          <input
            type="email"
            value="admin@hitchpay.com"
            class="w-full p-3 bg-layout-bg border border-border-color rounded-xl outline-none dark:text-white"
          />
        </div>
      </div>

      <div class="flex justify-end">
        <button class="bg-brand-purple text-white px-6 py-2 rounded-xl font-bold">
          Save Changes
        </button>
      </div>
    </div>

    <div class="bg-surface border border-border-color rounded-2xl p-8 space-y-6">
      <div class="border-b border-border-color pb-4">
        <h3 class="text-lg font-bold text-gray-800 dark:text-white">Notifications</h3>
        <p class="text-sm text-gray-400">Manage how you receive alerts.</p>
      </div>

      <div class="flex items-center justify-between">
        <span class="text-gray-700 dark:text-gray-300">Email Notifications</span>
        <div class="w-10 h-6 bg-brand-green rounded-full relative cursor-pointer">
          <div class="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  </div>
</template>

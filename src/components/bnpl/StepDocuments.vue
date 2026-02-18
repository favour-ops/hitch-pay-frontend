<script setup>
import { reactive } from 'vue'

const documents = reactive({
  registration: null,
  taxId: null,
  authLetter: null,
})

const handleFileUpload = (type, event) => {
  const file = event.target.files[0]
  if (file) documents[type] = file
}
</script>

<template>
  <div class="space-y-6 max-w-2xl mx-auto">
    <div class="text-center mb-8">
      <h2 class="text-2xl font-bold text-gray-800">Required Documents</h2>
      <p class="text-gray-500">Upload the following documents for verification</p>
    </div>

    <div class="space-y-4">
      <div
        class="p-4 border border-gray-100 rounded-2xl bg-gray-50 flex items-center justify-between"
      >
        <div>
          <p class="font-bold text-gray-800">Certificate of Registration</p>
          <p class="text-xs text-gray-400">Official registration certificate</p>
        </div>
        <label
          class="cursor-pointer bg-white border border-gray-200 px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors"
        >
          <input
            type="file"
            class="hidden"
            @change="handleFileUpload('registration', $event)"
            accept=".pdf"
          />
          {{ documents.registration ? 'Change File' : 'Upload' }}
        </label>
      </div>

      <div
        class="p-4 border border-gray-100 rounded-2xl bg-gray-50 flex items-center justify-between"
      >
        <div>
          <p class="font-bold text-gray-800">Tax Identification Document</p>
          <p class="text-xs text-gray-400">Tax ID or equivalent</p>
        </div>
        <label
          class="cursor-pointer bg-white border border-gray-200 px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors"
        >
          <input
            type="file"
            class="hidden"
            @change="handleFileUpload('taxId', $event)"
            accept=".pdf"
          />
          {{ documents.taxId ? 'Change File' : 'Upload' }}
        </label>
      </div>

      <div
        class="p-4 border border-gray-100 rounded-2xl bg-gray-50 flex items-center justify-between"
      >
        <div>
          <p class="font-bold text-gray-800">Authorization Letter</p>
          <p class="text-xs text-gray-400">Letter authorizing BNPL services</p>
        </div>
        <label
          class="cursor-pointer bg-white border border-gray-200 px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors"
        >
          <input
            type="file"
            class="hidden"
            @change="handleFileUpload('authLetter', $event)"
            accept=".pdf"
          />
          {{ documents.authLetter ? 'Change File' : 'Upload' }}
        </label>
      </div>
    </div>

    <div class="bg-brand-lavender/50 p-4 rounded-xl border border-brand-purple/10">
      <p class="text-[10px] text-brand-purple font-medium">
        Note: All documents should be in PDF format and not exceed 5MB each.
      </p>
    </div>
  </div>
</template>

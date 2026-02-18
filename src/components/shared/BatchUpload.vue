<template>
  <div class="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm max-w-2xl mx-auto">
    <h2 class="text-xl font-bold text-gray-800 mb-2">Add New Student</h2>
    <p class="text-sm text-gray-400 mb-8">
      Fill in details or upload to register a new student to enjoy the BNPL feature.
    </p>

    <div
      class="border-2 border-dashed border-gray-200 rounded-3xl p-12 text-center hover:border-brand-purple transition-colors cursor-pointer"
    >
      <div class="mb-4 flex justify-center">☁️</div>
      <p class="text-sm text-gray-800">Drag and drop your CSV file here</p>
      <p class="text-xs text-gray-400 mt-1">
        or <span class="text-brand-purple font-bold underline">Browse files</span>
      </p>
      <p class="text-[10px] text-gray-400 mt-4 uppercase">Supported format: CSV (Up to 10MB)</p>
    </div>

    <div class="mt-8 bg-gray-50 p-6 rounded-2xl">
      <h4 class="text-xs font-bold text-gray-800 mb-3">File Requirements:</h4>
      <ul class="text-[10px] text-gray-400 space-y-2 list-disc list-inside">
        <li>CSV file with headers: First Name, Last Name, Email, Phone...</li>
        <li>Email addresses must be valid and unique</li>
      </ul>
    </div>

    <button class="w-full bg-brand-purple text-white py-3 rounded-xl font-bold mt-8">
      Save Staff
    </button>
  </div>
</template>

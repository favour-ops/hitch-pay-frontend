import { defineStore } from 'pinia'

export const useLoanStore = defineStore('loan', {
  state: () => ({
    currentStep: 1,
    isSubmitting: false,
    showSuccessModal: false,
    institutionInfo: {},
    documents: {
      registration: null,
      taxId: null,
      authLetter: null,
    },
    products: {
      faculties: [],
      feeCategories: [],
    },
  }),
  actions: {
    nextStep() {
      this.currentStep++
    },
    prevStep() {
      this.currentStep--
    },
    async submitApplication() {
      this.isSubmitting = true
      try {
        // Prepare data for backend:
        const payload = {
          info: this.institutionInfo,
          products: this.products,
          // files would be added to FormData here
        }

        // await axios.post('/api/bnpl/submit', payload)

        this.showSuccessModal = true
      } catch (error) {
        console.error('Submission failed', error)
      } finally {
        this.isSubmitting = false
      }
    },
  },
})

# Hitch Pay Frontend

A Business Banking and Loan Dashboard built with Vue 3 + Vite + Tailwind CSS.

## 🛠 Project Structure

- `src/layouts/`: Contains `DashboardLayout.vue`, the shell for all authenticated pages.
- `src/components/layout/`: Global layout components like the `Sidebar`.
- `src/assets/main.css`: Custom brand theme configuration using Tailwind v4.

## 🎨 Design Reference

Based on the Hitch Pay UI specifications:

- **Primary Color:** Brand Purple (#4c1d95)
- **Backgrounds:** Layout BG (#f3f5f4), Sidebar Lavender (#f9f5ff)
- **Status:** Success Green (#10b981)

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## 💳 BNPL Onboarding Flow

The onboarding system uses a step-based architecture:

1. `OnboardingEntryModal.vue`: Initial call to action.
2. `OnboardingProgress.vue`: Visual tracker for the 4-step process.
3. `StepInstitutionInfo.vue`: Data capture for business identity.

### State Management

Application state for the multi-step form is stored in `src/stores/loanStore.js` to ensure data persists if the user navigates away and back.

## 📁 Document Uploads

- `StepDocuments.vue` uses hidden file inputs wrapped in styled labels to match the custom UI.
- Supported formats: PDF. Max size: 5MB.

## 🏛️ Institution Configuration

- `StepProductsFees.vue` includes a tagging system for Faculties and a tabular view for Fee Structures.
- All data is managed reactively in `loanStore.js`.

## ✅ Submission & Success States

- `StepReviewSubmit.vue` provides a read-only summary for user verification.
- `SuccessModal.vue` is a reusable component for submission events like "Application Submitted" or "Item Saved".
- [cite_start]Backend integration point is located in `loanStore.js` under the `submitApplication` action[cite: 31].

## 📊 Analytics & Reporting

- `DashboardOverview.vue` uses `vue-chartjs` for trend analysis.
- Stat cards highlight monthly percentage growth/decline.

## 👥 User Management

- `ManagementTable.vue` is a generic component used for both Student and Staff views.
- `BatchUpload.vue` provides a drag-and-drop interface for bulk CSV registration.

### Dependencies Required:

```sh
npm install chart.js vue-chartjs
```

## 🛍️ Services & Items

- `ServicesView.vue` features a dual-mode interface for managing Items and Categories.
- Includes searching, filtering, and toggle navigation.

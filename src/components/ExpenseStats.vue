<template>
    <div>
      <div class="grid grid-cols-3 gap-4 mb-6">
        <div class="card balance-bg text-white">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm opacity-90">Total Balance</p>
              <h3 class="text-2xl font-bold">KES {{ formatKES(balance) }}</h3>
            </div>
            <i class="fas fa-wallet text-3xl opacity-80"></i>
          </div>
        </div>
        
        <div class="card income-bg text-white">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm opacity-90">Total Income</p>
              <h3 class="text-2xl font-bold">KES {{ formatKES(totalIncome) }}</h3>
            </div>
            <i class="fas fa-arrow-down text-3xl opacity-80"></i>
          </div>
        </div>
        
        <div class="card expense-bg text-white">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm opacity-90">Total Expenses</p>
              <h3 class="text-2xl font-bold">KES {{ formatKES(totalExpenses) }}</h3>
            </div>
            <i class="fas fa-arrow-up text-3xl opacity-80"></i>
          </div>
        </div>
      </div>
  
      <div class="card mb-6">
        <h2 class="text-xl mb-6">Category Breakdown</h2>
        <div v-if="Object.keys(expensesByCategory).length === 0" class="text-center py-4 text-gray-600">
          <p>No category data available</p>
        </div>
        <div v-else class="space-y-4">
          <div v-for="(amount, category) in expensesByCategory" :key="category" class="space-y-2">
            <div class="flex justify-between">
              <span class="font-medium">{{ getCategoryLabel(category) }}</span>
              <span class="font-bold">KES {{ formatKES(amount) }}</span>
            </div>
            <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                :class="getCategoryColor(category)"
                :style="{ width: getPercentage(amount) + '%' }"
                class="h-full rounded-full"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, computed } from 'vue'
  
  const props = defineProps({
    totalIncome: {
      type: Number,
      required: true
    },
    totalExpenses: {
      type: Number,
      required: true
    },
    balance: {
      type: Number,
      required: true
    },
    expensesByCategory: {
      type: Object,
      required: true
    }
  })
  
  const categories = {
    food: { label: 'Food & Dining', color: 'bg-blue-500' },
    transportation: { label: 'Transportation', color: 'bg-green-500' },
    shopping: { label: 'Shopping', color: 'bg-yellow-500' },
    entertainment: { label: 'Entertainment', color: 'bg-purple-500' },
    bills: { label: 'Bills & Utilities', color: 'bg-red-500' },
    healthcare: { label: 'Healthcare', color: 'bg-pink-500' },
    education: { label: 'Education', color: 'bg-indigo-500' },
    salary: { label: 'Salary', color: 'bg-teal-500' },
    investment: { label: 'Investment', color: 'bg-cyan-500' },
    other: { label: 'Other', color: 'bg-gray-500' }
  }
  
  const formatKES = (amount) => {
    return amount.toLocaleString('en-KE', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  }
  
  const getCategoryLabel = (category) => {
    return categories[category]?.label || 'Other'
  }
  
  const getCategoryColor = (category) => {
    return categories[category]?.color || 'bg-gray-500'
  }
  
  const totalAmount = computed(() => {
    return Object.values(props.expensesByCategory).reduce((sum, amount) => sum + amount, 0)
  })
  
  const getPercentage = (amount) => {
    if (totalAmount.value === 0) return 0
    return (amount / totalAmount.value) * 100
  }
  </script>
  
  <style scoped>
  .bg-blue-500 { background-color: #3b82f6; }
  .bg-green-500 { background-color: #10b981; }
  .bg-yellow-500 { background-color: #f59e0b; }
  .bg-purple-500 { background-color: #8b5cf6; }
  .bg-red-500 { background-color: #ef4444; }
  .bg-pink-500 { background-color: #ec4899; }
  .bg-indigo-500 { background-color: #6366f1; }
  .bg-teal-500 { background-color: #14b8a6; }
  .bg-cyan-500 { background-color: #06b6d4; }
  .bg-gray-500 { background-color: #6b7280; }
  </style>
<template>
    <div class="card">
      <h2 class="text-xl mb-6">Recent Transactions</h2>
      
      <div v-if="expenses.length === 0" class="text-center py-8 text-gray-600">
        <i class="fas fa-receipt text-4xl mb-4"></i>
        <p>No transactions yet. Add your first transaction!</p>
      </div>
  
      <div v-else>
        <div class="space-y-4">
          <div 
            v-for="expense in expenses" 
            :key="expense.id"
            class="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            :class="{ 'bg-green-50': expense.type === 'income', 'bg-red-50': expense.type === 'expense' }"
          >
            <div class="flex items-center space-x-4">
              <div class="w-10 h-10 rounded-full flex items-center justify-center"
                   :class="expense.type === 'income' ? 'income-bg' : 'expense-bg'">
                <i :class="getCategoryIcon(expense.category)" class="text-white"></i>
              </div>
              <div>
                <h3 class="font-semibold">{{ expense.description }}</h3>
                <p class="text-sm text-gray-600">
                  {{ formatDate(expense.date) }} • {{ getCategoryLabel(expense.category) }}
                </p>
              </div>
              <div class="flex items-center space-x-4">
    <span class="font-bold text-lg" 
          :class="expense.type === 'income' ? 'text-green-600' : 'text-red-600'">
      {{ expense.type === 'income' ? '+' : '-' }}KES {{ expense.amount.toLocaleString('en-KE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}
    </span>
            </div>
            
           
              <button 
                @click="$emit('remove-expense', expense.id)"
                class="text-red-500 hover:text-red-700 transition-colors"
              >
                <i class="fas fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue'
  
  defineProps({
    expenses: {
      type: Array,
      required: true
    }
  })
  
  defineEmits(['remove-expense'])
  
  const categories = {
    food: { label: 'Food & Dining', icon: 'fas fa-utensils' },
    transportation: { label: 'Transportation', icon: 'fas fa-car' },
    shopping: { label: 'Shopping', icon: 'fas fa-shopping-bag' },
    entertainment: { label: 'Entertainment', icon: 'fas fa-film' },
    bills: { label: 'Bills & Utilities', icon: 'fas fa-file-invoice-dollar' },
    healthcare: { label: 'Healthcare', icon: 'fas fa-heartbeat' },
    education: { label: 'Education', icon: 'fas fa-graduation-cap' },
    salary: { label: 'Salary', icon: 'fas fa-money-check' },
    investment: { label: 'Investment', icon: 'fas fa-chart-line' },
    other: { label: 'Other', icon: 'fas fa-receipt' }
  }
  
  const getCategoryIcon = (category) => {
    return categories[category]?.icon || 'fas fa-receipt'
  }
  
  const getCategoryLabel = (category) => {
    return categories[category]?.label || 'Other'
  }
  
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }
  </script>
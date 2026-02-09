<template>
    <div class="card">
      <h2 class="text-xl mb-6">Add New Transaction</h2>
      <form @submit.prevent="handleSubmit">
        <div class="grid grid-cols-2 gap-4 mb-4">
          <div class="form-group">
            <label class="form-label">Transaction Type</label>
            <select v-model="formData.type" class="form-select" required>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>
          
          <div class="form-group">
            <label class="form-label">Category</label>
            <select v-model="formData.category" class="form-select" required>
              <option value="">Select Category</option>
              <option v-for="category in categories" :key="category.value" :value="category.value">
                {{ category.label }}
              </option>
            </select>
          </div>
        </div>
  
        <div class="grid grid-cols-2 gap-4 mb-4">
          <div class="form-group">
            <label class="form-label">Amount (KES)</label>
            <input 
              v-model="formData.amount" 
              type="number" 
              min="0" 
              step="0.01" 
              class="form-input" 
              placeholder="0.00"
              required
            >
          </div>
          
          <div class="form-group">
            <label class="form-label">Date</label>
            <input 
              v-model="formData.date" 
              type="date" 
              class="form-input"
              required
            >
          </div>
        </div>
  
        <div class="form-group mb-6">
          <label class="form-label">Description</label>
          <input 
            v-model="formData.description" 
            type="text" 
            class="form-input" 
            placeholder="Enter description"
            required
          >
        </div>
  
        <button type="submit" class="btn btn-primary w-full">
          <i class="fas fa-plus mr-2"></i>
          Add Transaction
        </button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { reactive, defineEmits } from 'vue'
  
  const emit = defineEmits(['add-expense'])
  
  const formData = reactive({
    type: 'expense',
    category: '',
    amount: '',
    date: new Date().toISOString().split('T')[0],
    description: ''
  })
  
  const categories = [
    { value: 'food', label: 'Food & Dining' },
    { value: 'transportation', label: 'Transportation' },
    { value: 'shopping', label: 'Shopping' },
    { value: 'entertainment', label: 'Entertainment' },
    { value: 'bills', label: 'Bills & Utilities' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'education', label: 'Education' },
    { value: 'salary', label: 'Salary' },
    { value: 'investment', label: 'Investment' },
    { value: 'other', label: 'Other' }
  ]
  
  const handleSubmit = () => {
    emit('add-expense', {
      ...formData,
      amount: parseFloat(formData.amount)
    })
    
    // Reset form
    formData.type = 'expense'
    formData.category = ''
    formData.amount = ''
    formData.date = new Date().toISOString().split('T')[0]
    formData.description = ''
  }
  </script>
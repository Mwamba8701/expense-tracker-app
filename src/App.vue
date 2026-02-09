<template>
  <div class="container">
    <header class="mb-6">
      <div class="flex items-center justify-between mb-6">
        <div>
          <h1 class="text-3xl font-bold text-white mb-2">
            <i class="fas fa-chart-pie mr-3"></i>
            Modern Expense Tracker
          </h1>
          <p class="text-white opacity-90">Track your income and expenses effortlessly</p>
        </div>
        <button 
          @click="exportData" 
          class="btn bg-white text-purple-600 hover:bg-gray-100"
        >
          <i class="fas fa-download mr-2"></i>
          Export Data
        </button>
      </div>
    </header>

    <main>
      <ExpenseStats 
        :total-income="totalIncome"
        :total-expenses="totalExpenses"
        :balance="balance"
        :expenses-by-category="expensesByCategory"
      />

      <div class="grid grid-cols-2 gap-6">
        <div>
          <ExpenseForm @add-expense="addExpense" />
        </div>
        <div>
          <ExpenseChart 
            :expenses="expenses" 
            :expenses-by-category="expensesByCategory" 
          />
        </div>
      </div>

      <ExpenseList 
        :expenses="expenses" 
        @remove-expense="removeExpense" 
      />
    </main>

    <footer class="text-center text-white opacity-75 mt-8">
      <p>Expense Tracker © 2026 • Data stored locally in your browser</p>
    </footer>
  </div>
</template>

<script setup>
import { useExpenses } from './composables/useExpenses'
import ExpenseForm from './components/ExpenseForm.vue'
import ExpenseList from './components/ExpenseList.vue'
import ExpenseStats from './components/ExpenseStats.vue'
import ExpenseChart from './components/ExpenseChart.vue'

const {
  expenses,
  addExpense,
  removeExpense,
  totalExpenses,
  totalIncome,
  balance,
  expensesByCategory
} = useExpenses()

const exportData = () => {
  const dataStr = JSON.stringify(expenses.value, null, 2)
  const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr)
  
  const exportFileDefaultName = 'expenses-data.json'
  
  const linkElement = document.createElement('a')
  linkElement.setAttribute('href', dataUri)
  linkElement.setAttribute('download', exportFileDefaultName)
  linkElement.click()
  
  alert('Data exported successfully!')
}
</script>
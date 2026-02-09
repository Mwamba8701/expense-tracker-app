import { ref, computed, onMounted, watch } from 'vue'

export function useExpenses() {
  const expenses = ref([])
  const storageKey = 'expense-tracker-data'

  // Load expenses from localStorage on mount
  onMounted(() => {
    const savedData = localStorage.getItem(storageKey)
    if (savedData) {
      expenses.value = JSON.parse(savedData)
    }
  })

  // Save expenses to localStorage whenever they change
  watch(expenses, (newExpenses) => {
    localStorage.setItem(storageKey, JSON.stringify(newExpenses))
  }, { deep: true })

  // Add new expense
  const addExpense = (expense) => {
    expenses.value.unshift({
      ...expense,
      id: Date.now(),
      date: new Date().toISOString()
    })
  }

  // Remove expense
  const removeExpense = (id) => {
    expenses.value = expenses.value.filter(expense => expense.id !== id)
  }

  // Edit expense
  const editExpense = (id, updatedExpense) => {
    const index = expenses.value.findIndex(expense => expense.id === id)
    if (index !== -1) {
      expenses.value[index] = { ...expenses.value[index], ...updatedExpense }
    }
  }

  // Computed properties
  const totalExpenses = computed(() => {
    return expenses.value
      .filter(expense => expense.type === 'expense')
      .reduce((sum, expense) => sum + expense.amount, 0)
  })

  const totalIncome = computed(() => {
    return expenses.value
      .filter(expense => expense.type === 'income')
      .reduce((sum, expense) => sum + expense.amount, 0)
  })

  const balance = computed(() => totalIncome.value - totalExpenses.value)

  const expensesByCategory = computed(() => {
    const categories = {}
    expenses.value.forEach(expense => {
      if (!categories[expense.category]) {
        categories[expense.category] = 0
      }
      categories[expense.category] += expense.amount
    })
    return categories
  })

  // Filter expenses by date range
  const getExpensesByDateRange = (startDate, endDate) => {
    return expenses.value.filter(expense => {
      const expenseDate = new Date(expense.date)
      return expenseDate >= startDate && expenseDate <= endDate
    })
  }

  return {
    expenses,
    addExpense,
    removeExpense,
    editExpense,
    totalExpenses,
    totalIncome,
    balance,
    expensesByCategory,
    getExpensesByDateRange
  }
}
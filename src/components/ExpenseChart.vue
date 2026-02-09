<template>
    <div class="card">
      <h2 class="text-xl mb-6">Spending Overview</h2>
      <div class="h-64">
        <canvas ref="chartCanvas"></canvas>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, watch, defineProps } from 'vue'
  import { Chart, registerables } from 'chart.js'
  
  Chart.register(...registerables)
  
  const props = defineProps({
    expenses: {
      type: Array,
      required: true
    },
    expensesByCategory: {
      type: Object,
      required: true
    }
  })
  
  const chartCanvas = ref(null)
  let chartInstance = null
  
  const getCategoryColor = (category) => {
    const colors = {
      food: '#3b82f6',
      transportation: '#10b981',
      shopping: '#f59e0b',
      entertainment: '#8b5cf6',
      bills: '#ef4444',
      healthcare: '#ec4899',
      education: '#6366f1',
      salary: '#14b8a6',
      investment: '#06b6d4',
      other: '#6b7280'
    }
    return colors[category] || '#6b7280'
  }
  
  const createChart = () => {
    if (chartInstance) {
      chartInstance.destroy()
    }
  
    if (!chartCanvas.value) return
  
    const ctx = chartCanvas.value.getContext('2d')
    
    const categories = Object.keys(props.expensesByCategory)
    const amounts = Object.values(props.expensesByCategory)
    const backgroundColors = categories.map(cat => getCategoryColor(cat))
  
    chartInstance = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: categories.map(cat => {
          const labels = {
            food: 'Food',
            transportation: 'Transport',
            shopping: 'Shopping',
            entertainment: 'Entertain',
            bills: 'Bills',
            healthcare: 'Health',
            education: 'Education',
            salary: 'Salary',
            investment: 'Invest',
            other: 'Other'
          }
          return labels[cat] || cat
        }),
        datasets: [{
          data: amounts,
          backgroundColor: backgroundColors,
          borderWidth: 2,
          borderColor: '#ffffff'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
            labels: {
              padding: 20,
              usePointStyle: true,
              font: {
                size: 12
              }
            }
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const label = context.label || ''
                const value = context.raw || 0
                const total = context.dataset.data.reduce((a, b) => a + b, 0)
                const percentage = Math.round((value / total) * 100)
                return `${label}: $${value.toFixed(2)} (${percentage}%)`
              }
            }
          }
        }
      }
    })
  }
  
  onMounted(() => {
    createChart()
  })
  
  watch(() => props.expensesByCategory, () => {
    createChart()
  }, { deep: true })
  </script>
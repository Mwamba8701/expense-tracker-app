// Currency utility for KES formatting
export const formatKES = (amount) => {
    return amount.toLocaleString('en-KE', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      currency: 'KES'
    })
  }
  
  export const formatKESWithSymbol = (amount) => {
    return `KES ${formatKES(amount)}`
  }
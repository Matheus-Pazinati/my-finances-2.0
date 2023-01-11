export const formatMoney = new Intl.NumberFormat([], {
  style: 'currency',
  currency: 'BRL',
})

export const formatDate = new Intl.DateTimeFormat('pt-BR')

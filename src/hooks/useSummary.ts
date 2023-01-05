import { useContext } from "react"
import { TransactionsContext } from "../context/TransactionsContext"

export function useSummary() {
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce((accumulator, transaction) => {
    if (transaction.type === "income") {
      accumulator.income += transaction.price
    } else {
      accumulator.expense += transaction.price
    }
    accumulator.total = accumulator.income - accumulator.expense
  
    return accumulator
  },
    {
      income: 0,
      expense: 0,
      total: 0
    }
  )

  return summary
}


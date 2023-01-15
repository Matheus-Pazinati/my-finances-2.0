import { useMemo } from 'react'
import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../context/TransactionsContext'

export function useSummary() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  const summary = useMemo(() => {
    transactions.reduce(
      (accumulator, transaction) => {
        if (transaction.type === 'income') {
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
        total: 0,
      },
    )
  }, [transactions])

  return summary
}

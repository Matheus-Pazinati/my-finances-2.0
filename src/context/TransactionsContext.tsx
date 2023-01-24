import { ReactNode, useCallback, useEffect, useState } from 'react'
import { api } from '../lib/axios'
import { createContext } from 'use-context-selector'

interface TransactionProps {
  id: number
  description: string
  type: 'income' | 'expense'
  category: string
  price: number
  createdAt: string
}

interface NewTransactionProps {
  description: string
  type: 'income' | 'expense'
  category: string
  price: number
}

interface TransactionsContextProps {
  transactions: TransactionProps[]
  getTransactionsData: (query?: string) => Promise<void>
  createNewTransaction: (data: NewTransactionProps) => Promise<void>
  deleteTransaction: (id: number) => Promise<void>
}

export const TransactionsContext = createContext({} as TransactionsContextProps)

interface TransactionsProviderProps {
  children: ReactNode
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([])

  const getTransactionsData = useCallback(async function (query?: string) {
    const response = await api.get('transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions(response.data)
  }, [])

  const createNewTransaction = useCallback(
    async (data: NewTransactionProps) => {
      const { category, description, price, type } = data
      const response = await api.post('transactions', {
        category,
        description,
        price,
        type,
        createdAt: new Date(),
      })
      setTransactions((state) => [response.data, ...state])
    },
    [],
  )

  const deleteTransaction = useCallback(
    async (id: number) => {
      const listWithoutDeletedOne = transactions.filter((transaction) => {
        return transaction.id !== id
      })
      await api.delete(`transactions/${id}`).then((data) => console.log(data))

      setTransactions(listWithoutDeletedOne)
    },
    [transactions],
  )

  useEffect(() => {
    getTransactionsData()
  }, [getTransactionsData])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        getTransactionsData,
        createNewTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

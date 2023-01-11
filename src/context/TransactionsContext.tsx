import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

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
}

export const TransactionsContext = createContext({} as TransactionsContextProps)

interface TransactionsProviderProps {
  children: ReactNode
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([])

  async function getTransactionsData(query?: string) {
    const response = await api.get('transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions(response.data)
  }

  async function createNewTransaction(data: NewTransactionProps) {
    const { category, description, price, type } = data
    const response = await api.post('transactions', {
      category,
      description,
      price,
      type,
      createdAt: new Date(),
    })
    setTransactions((state) => [response.data, ...state])
  }

  useEffect(() => {
    getTransactionsData()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{ transactions, getTransactionsData, createNewTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface TransactionProps {
  id: number;
  description: string;
  type: 'income' | 'expense';
  category: string;
  price: number
  createdAt: string;
}

interface TransactionsContextProps {
  transactions: TransactionProps[]
  getTransactionsData: (query?: string) => Promise<void>
}

export const TransactionsContext = createContext({} as TransactionsContextProps)

interface TransactionsProviderProps {
  children: ReactNode
}

export function TransactionsProvider({children}: TransactionsProviderProps) {

  const [transactions, setTransactions] = useState<TransactionProps[]>([])

  async function getTransactionsData(query?: string) {
    const response = await api.get('transactions', {
      params: {
        q: query
      }
    })

    setTransactions(response.data)
  }

  useEffect(() => {
    getTransactionsData()
  }, [])

  return (
    <TransactionsContext.Provider value={{transactions, getTransactionsData}}>
      {children}
    </TransactionsContext.Provider>
  )
}
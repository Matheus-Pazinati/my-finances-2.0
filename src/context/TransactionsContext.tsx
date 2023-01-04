import { createContext, ReactNode, useEffect, useState } from "react";

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
}

export const TransactionsContext = createContext({} as TransactionsContextProps)

interface TransactionsProviderProps {
  children: ReactNode
}

export function TransactionsProvider({children}: TransactionsProviderProps) {

  const [transactions, setTransactions] = useState<TransactionProps[]>([])

  async function getTransactionsData() {
    const response = await fetch('http://localhost:3333/transactions')
    const transactions = await response.json()

    setTransactions(transactions)
  }

  useEffect(() => {
    getTransactionsData()
  }, [])

  return (
    <TransactionsContext.Provider value={{transactions}}>
      {children}
    </TransactionsContext.Provider>
  )
}
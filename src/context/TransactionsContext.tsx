import { createContext, ReactNode } from "react";

const TransactionsContext = createContext({} as any)

interface TransactionsProviderProps {
  children: ReactNode
}

export function TransactionsProvider({children}: TransactionsProviderProps) {
  return (
    <TransactionsContext.Provider value={{}}>
      {children}
    </TransactionsContext.Provider>
  )
}
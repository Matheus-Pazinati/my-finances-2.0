import { CalendarBlank, Tag } from "phosphor-react";
import { useEffect, useState } from "react";

import { SearchTransactionForm } from "../SearchTransactionForm";

import { TableContainer, TableContent, TransactionAmount } from "./styles";

interface TransactionProps {
  id: number;
  description: string;
  type: 'income' | 'expense';
  category: string;
  price: number
  createdAt: string;
}

export function TransactionsTable() {

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
    <TableContainer>
      <SearchTransactionForm />
      <TableContent>
        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td className="TransactionAndValueContainer">
                  <p>{transaction.description}</p>
                  <div>
                    <TransactionAmount type={transaction.type}>
                      R$ {transaction.price}
                    </TransactionAmount>
                  </div>
                </td>
                <td className="TypeAndDateContainer">
                  <div>
                    <Tag size={16} />
                    <span>{transaction.category}</span>
                  </div>
                  <div>
                    <CalendarBlank size={16} />
                    <span>{transaction.createdAt}</span>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </TableContent>
    </TableContainer>
  )
}
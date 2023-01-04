import { CalendarBlank, Tag } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { TransactionsContext } from "../../context/TransactionsContext";

import { SearchTransactionForm } from "../SearchTransactionForm";

import { TableContainer, TableContent, TransactionAmount } from "./styles";



export function TransactionsTable() {

  const { transactions } = useContext(TransactionsContext)

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
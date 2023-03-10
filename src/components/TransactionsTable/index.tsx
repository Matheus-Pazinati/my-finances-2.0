import { CalendarBlank, Tag, Trash } from 'phosphor-react'
import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../../context/TransactionsContext'
import { formatDate, formatMoney } from '../../utils/formatter'

import { SearchTransactionForm } from '../SearchTransactionForm'

import { TableContainer, TableContent, TransactionAmount } from './styles'

export function TransactionsTable() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  const deleteTransaction = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.deleteTransaction
    },
  )

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
                      {transaction.type === 'expense' && '- '}
                      {formatMoney.format(transaction.price)}
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
                    <span>
                      {formatDate.format(new Date(transaction.createdAt))}
                    </span>
                  </div>
                  <button
                    className="DeleteTransactionButton"
                    onClick={() => {
                      deleteTransaction(transaction.id)
                    }}
                  >
                    <Trash size={24} color={'#EE3333'} />
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </TableContent>
    </TableContainer>
  )
}

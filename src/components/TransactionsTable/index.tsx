import { CalendarBlank, Tag } from "phosphor-react";

import { SearchTransactionForm } from "../SearchTransactionForm";

import { TableContainer, TableContent, TransactionAmount } from "./styles";

export function TransactionsTable() {
  return (
    <TableContainer>
      <SearchTransactionForm />
      <TableContent>
        <tbody>
          <tr>
            <div className="TransactionAndValueContainer">
              <td>Desenvolvimento de site</td>
              <td>
                <TransactionAmount type="income">
                  R$ 12.000,00
                </TransactionAmount>

              </td>
            </div>
            <div className="TypeAndDateContainer">
              <td>
                <Tag size={16} />
                <span>Venda</span>
              </td>
              <td>
                <CalendarBlank size={16} />
                <span>29/12/2022</span>
              </td>
            </div>
          </tr>
          <tr>
            <div className="TransactionAndValueContainer">
              <td>Hamburguer</td>
              <td>
                <TransactionAmount type="expense">
                  - R$ 40,00
                </TransactionAmount>
              </td>
            </div>
            <div className="TypeAndDateContainer">
              <td>
                <Tag size={16} />
                <span>Compra</span>
              </td>
              <td>
                <CalendarBlank size={16} />
                <span>28/12/2022</span>
              </td>
            </div>
          </tr>
        </tbody>
      </TableContent>
    </TableContainer>
  )
}
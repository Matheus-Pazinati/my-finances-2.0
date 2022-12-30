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
            <td className="TransactionAndValueContainer">
              <p>Desenvolvimento de site</p>
              <div>
                <TransactionAmount type="income">
                  R$ 12.000,00
                </TransactionAmount>
              </div>
            </td>
            <td className="TypeAndDateContainer">
              <div>
                <Tag size={16} />
                <span>Venda</span>
              </div>
              <div>
                <CalendarBlank size={16} />
                <span>29/12/2022</span>
              </div>
            </td>
          </tr>
          <tr>
            <td className="TransactionAndValueContainer">
              <p>Hamburguer</p>
              <div>
                <TransactionAmount type="expense">
                  - R$ 40,00
                </TransactionAmount>
              </div>
            </td>
            <td className="TypeAndDateContainer">
              <div>
                <Tag size={16} />
                <span>Compra</span>
              </div>
              <div>
                <CalendarBlank size={16} />
                <span>28/12/2022</span>
              </div>
            </td>
          </tr>
        </tbody>
      </TableContent>
    </TableContainer>
  )
}
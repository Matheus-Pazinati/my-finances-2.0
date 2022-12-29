import { CalendarBlank, Tag } from "phosphor-react";
import { TableContainer, TableContent } from "./styles";

export function TransactionsTable() {
  return (
    <TableContainer>
      <TableContent>
        <tbody>
          <tr>
            <div className="TransactionAndValueContainer">
              <td>Desenvolvimento de site</td>
              <td>R$ 12.000,00</td>
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
              <td>-R$ 40,00</td>
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
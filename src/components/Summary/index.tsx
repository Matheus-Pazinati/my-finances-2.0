import { useContext } from "react";
import { TransactionsContext } from "../../context/TransactionsContext";
import { SummaryCard } from "./components/SummaryCard";
import { EarningsIcon, ExpenseIcon, SummaryContainer, TotalIcon } from "./styles";

export function Summary() {
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce((accumulator, transaction) => {
    if (transaction.type === "income") {
      accumulator.income += transaction.price
    } else {
      accumulator.expense += transaction.price
    }
    accumulator.total = accumulator.income - accumulator.expense

    return accumulator
  },
    {
      income: 0,
      expense: 0,
      total: 0
    }
  )

  return (
    <SummaryContainer>
      <SummaryCard
        title="Entradas"
        Icon={EarningsIcon}
        amount={summary.income}
      />
      <SummaryCard
        title="Saídas"
        Icon={ExpenseIcon}
        amount={summary.expense}
      />
      <SummaryCard
        title="Total"
        Icon={TotalIcon}
        amount={summary.total}
      />
    </SummaryContainer>
  )
}
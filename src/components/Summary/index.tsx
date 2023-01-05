import { useSummary } from "../../hooks/useSummary";

import { SummaryCard } from "./components/SummaryCard";
import { EarningsIcon, ExpenseIcon, SummaryContainer, TotalIcon } from "./styles";

export function Summary() {

  const summary = useSummary()

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
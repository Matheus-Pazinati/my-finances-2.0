import { SummaryCard } from "./components/SummaryCard";
import { EarningsIcon, ExpenseIcon, SummaryContainer, TotalIcon } from "./styles";

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard
        title="Entradas"
        Icon={EarningsIcon}
        amount={17.500}
      />
      <SummaryCard
        title="Saídas"
        Icon={ExpenseIcon}
        amount={17.500}
      />
      <SummaryCard
        title="Total"
        Icon={TotalIcon}
        amount={17.500}
      />
    </SummaryContainer>
  )
}
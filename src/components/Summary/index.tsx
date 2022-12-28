import { SummaryCard } from "./components/SummaryCard";
import { SummaryContainer } from "./styles";

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard />
      <SummaryCard />
      <SummaryCard />
    </SummaryContainer>
  )
}
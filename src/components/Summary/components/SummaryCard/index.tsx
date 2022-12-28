import { ArrowCircleUp } from 'phosphor-react'
import { SummaryCardContainer } from './styles';

interface SummaryCardProps {
  title: string;
  Icon: typeof ArrowCircleUp;
  amount: number;
}

export function SummaryCard({ title, Icon, amount }: SummaryCardProps) {
  return (
    <SummaryCardContainer>
      <header>
        <span>{title}</span>
        <Icon size={32} />
      </header>
      <strong>R$ {amount}</strong>
    </SummaryCardContainer>
  )
}
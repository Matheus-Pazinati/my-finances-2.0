import { ArrowCircleUp } from 'phosphor-react'

interface SummaryCardProps {
  title: string;
  Icon: typeof ArrowCircleUp;
  amount: number;
}

export function SummaryCard({ title, Icon, amount }: SummaryCardProps) {
  return (
    <div>
      <header>
        <span>{title}</span>
        <Icon size={32} />
      </header>
      <strong>R$ {amount}</strong>
    </div>
  )
}
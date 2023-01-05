import { ArrowCircleUp } from 'phosphor-react'
import { formatMoney } from '../../../../utils/formatter';
import { SummaryCardContainer } from './styles';

interface SummaryCardProps {
  title: string;
  Icon: typeof ArrowCircleUp;
  amount: number;
}

export function SummaryCard({ title, Icon, amount }: SummaryCardProps) {
  return (
    <SummaryCardContainer type={title} isBalancePositive={amount >= 0}>
      <header>
        <span>{title}</span>
        <Icon size={32} />
      </header>
      <strong>{formatMoney.format(amount)}</strong>
    </SummaryCardContainer>
  )
}
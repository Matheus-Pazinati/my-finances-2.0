import styled from 'styled-components'
import {
  ArrowCircleUp,
  ArrowCircleDown,
  CurrencyCircleDollar,
} from 'phosphor-react'

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  padding: 0 1.5rem;
  margin: -3.5rem auto 0;

  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1120px) {
    padding: 0;
  }
`

export const EarningsIcon = styled<typeof ArrowCircleUp>(ArrowCircleUp)`
  color: ${({ theme }) => theme['green-300']};
`

export const ExpenseIcon = styled<typeof ArrowCircleDown>(ArrowCircleDown)`
  color: ${({ theme }) => theme['red-300']};
`

export const TotalIcon = styled<typeof CurrencyCircleDollar>(
  CurrencyCircleDollar,
)`
  color: ${({ theme }) => theme.white};
`

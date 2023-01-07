import styled from "styled-components";

interface SummaryCardContainerProps {
  type: string
  isBalancePositive: boolean
}

export const SummaryCardContainer = styled.div<SummaryCardContainerProps>`
  width: 100%;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.75rem;
  background-color: ${({type, isBalancePositive, theme}) => type === "Total" ? `
    ${isBalancePositive ? theme["green-500"] : theme["red-500"]}
  ` : theme["gray-600"]};
  border-radius: 6px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({theme}) => theme["gray-300"]};
  }

  strong {
    font-size: 2rem;
  }
`
import styled from 'styled-components'

export const TableContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;

  @media (min-width: 1120px) {
    padding: 0;
  }
`

export const TableContent = styled.table`
  width: 100%;
  margin-top: 0.75rem;

  tbody {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  tr {
    display: flex;
    flex-direction: column;

    @media (min-width: 900px) {
      display: grid;
      grid-template-columns: 2fr 1fr;
    }
  }

  td {
    display: flex;
    background-color: ${({ theme }) => theme['gray-700']};
    width: 100%;
    padding: 1rem 1.25rem;
    position: relative;

    @media (min-width: 900px) {
      padding: 1.25rem 2rem;
    }
  }

  .DeleteTransactionButton {
    position: absolute;
    right: 20px;
    top: -70px;

    border: none;
    cursor: pointer;
    background-color: transparent;

    @media (min-width: 900px) {
      top: 23.5px;
      right: 2px;
    }
  }

  .TransactionAndValueContainer {
    flex-direction: column;
    gap: 4px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;

    @media (min-width: 900px) {
      flex-direction: row;
      align-items: center;
      border-top-right-radius: 0;
      border-bottom-left-radius: 6px;

      p {
        flex: 1;
      }
    }
  }

  .TypeAndDateContainer {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    color: ${({ theme }) => theme['gray-500']};
    align-items: center;
    justify-content: space-between;

    @media (min-width: 900px) {
      justify-content: space-between;
      border-bottom-left-radius: 0;
      border-top-right-radius: 6px;
    }

    div {
      display: flex;
      align-items: center;
      gap: 4px;
    }
  }
`

interface TransactionAmountProps {
  type: 'income' | 'expense'
}

export const TransactionAmount = styled.span<TransactionAmountProps>`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 2rem;
  color: ${({ theme, type }) =>
    type === 'income' ? theme['green-300'] : theme['red-300']};
`

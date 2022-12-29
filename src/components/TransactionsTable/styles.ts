import styled from "styled-components";

export const TableContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

export const TableContent = styled.table`
  width: 100%;

  tbody {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  tr {
    display: flex;
    flex-direction: column;
  }

  div {
    display: flex;
    background-color: ${({theme}) => theme["gray-700"]};
    width: 100%;
    padding: 1.25rem;
  }

  .TransactionAndValueContainer {
    flex-direction: column;
    gap: 4px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }

  .TypeAndDateContainer {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    color: ${({theme}) => theme["gray-500"]};
    align-items: center;
    justify-content: space-between;

    td {
      display: flex;
      align-items: center;
      gap: 4px;
    }
  }
`
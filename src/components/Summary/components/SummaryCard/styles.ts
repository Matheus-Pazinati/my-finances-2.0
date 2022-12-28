import styled from "styled-components";

export const SummaryCardContainer = styled.div`
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.75rem;
  background-color: ${({theme}) => theme["gray-600"]};
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
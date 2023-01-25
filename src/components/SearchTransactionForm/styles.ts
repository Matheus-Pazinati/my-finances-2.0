import styled from 'styled-components'

export const SearchContainer = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .InputContainer {
    width: 100%;
    position: relative;

    input {
      flex: 1;
      width: 100%;
      padding: 1rem;
      border-radius: 6px;
      background-color: ${({ theme }) => theme['gray-900']};
      color: ${({ theme }) => theme['gray-300']};
      border: none;
      line-height: 22.4px;
    }

    .CancelSearchButton {
      position: absolute;
      right: 15px;
      top: 25%;
      background-color: transparent;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        transform: scale(1.25, 1.25);
      }
    }
  }
`

export const SearchButton = styled.button`
  padding: 0.875rem 1rem;
  border-radius: 6px;
  border: none;
  border: 1px solid ${({ theme }) => theme['green-300']};
  color: ${({ theme }) => theme['green-300']};
  background-color: transparent;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    color: ${({ theme }) => theme.white};
    transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    border-color: ${({ theme }) => theme['green-500']};
    background-color: ${({ theme }) => theme['green-500']};
  }

  @media (min-width: 900px) {
    &::after {
      content: 'Buscar';
    }
    padding: 0.875rem 2rem;
  }
`

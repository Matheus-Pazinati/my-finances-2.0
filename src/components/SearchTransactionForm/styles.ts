import styled from 'styled-components'

interface SubmitButtonProps {
  themeColor: 'red' | 'green'
}

export const SearchContainer = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  input {
    flex: 1;
    padding: 1rem;
    border-radius: 6px;
    background-color: ${({ theme }) => theme['gray-900']};
    color: ${({ theme }) => theme['gray-300']};
    border: none;
    line-height: 22.4px;
  }
`

export const SubmitButton = styled.button<SubmitButtonProps>`
  padding: 0.875rem 1rem;
  border-radius: 6px;
  border: none;
  border: 1px solid ${({ theme, themeColor }) => theme[`${themeColor}-300`]};
  color: ${({ theme, themeColor }) => theme[`${themeColor}-300`]};
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
    border-color: ${({ theme, themeColor }) => theme[`${themeColor}-500`]};
    background-color: ${({ theme, themeColor }) => theme[`${themeColor}-500`]};
  }

  @media (min-width: 900px) {
    padding: 0.875rem 2rem;
  }
`
export const SearchButton = styled(SubmitButton)`
  @media (min-width: 900px) {
    &::after {
      content: 'Buscar';
    }
  }
`

export const CancelSearchButton = styled(SubmitButton)`
  @media (min-width: 900px) {
    &::after {
      content: 'Cancelar';
    }
  }
`

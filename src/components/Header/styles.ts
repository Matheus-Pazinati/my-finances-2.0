import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme['gray-900']};
  padding: 2rem 1.5rem 6.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  h1 {
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    gap: 0.5rem;

    @media (min-width: 900px) {
      font-size: 2rem;
    }

    img {
      width: 1.5rem;

      @media (min-width: 900px) {
        width: 2.25rem;
      }
    }

    span {
      color: ${({ theme }) => theme['green-500']};
    }
  }

  button {
    padding: 0.5rem 1rem;
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme['green-500']};
    font-size: 0.875rem;
    font-weight: 700;
    border: none;
    border-radius: 6px;
    line-height: 22px;
    cursor: pointer;

    @media (min-width: 900px) {
      font-size: 1rem;
      padding: 0.75rem 1.25rem;
    }

    &:hover {
      transition: background 0.2s;
      background-color: ${({ theme }) => theme['green-300']};
    }
  }
`

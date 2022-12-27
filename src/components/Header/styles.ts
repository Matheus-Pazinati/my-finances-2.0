import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: ${({theme}) => theme["gray-900"]};
  padding: 2rem 1.5rem 2.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    gap: 0.5rem;

    img {
      width: 1.5rem;
    }

    span {
      color: ${({theme}) => theme["green-500"]};
    }
  }
`
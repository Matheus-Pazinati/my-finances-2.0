import styled from "styled-components";

export const SearchContainer = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  input {
    flex: 1;
    padding: 1rem;
    border-radius: 6px;
    background-color: ${({theme}) => theme["gray-900"]};
    color: ${({theme}) => theme["gray-300"]};
    border: none;
    line-height: 22.4px;
  }

  button {
    padding: 0.875rem 1rem;
    border-radius: 6px;
    border: none;
    border: 1px solid ${({theme}) => theme["green-300"]};
    color: ${({theme}) => theme["green-300"]};
    background-color: transparent;
    font-weight: bold;
    cursor: pointer;

    :hover {
      border-color: ${({theme}) => theme["green-500"]};
      color: ${({theme}) => theme.white};
      background-color: ${({theme}) => theme["green-500"]};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }
`
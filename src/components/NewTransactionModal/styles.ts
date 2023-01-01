import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from '@radix-ui/react-radio-group';

export const DialogOverlay = styled(Dialog.Overlay)`
  width: 100vw;
  height: 100vh;

  position: fixed;
  inset: 0;

  background-color: rgba(0, 0, 0, 0.75);
`

export const DialogContent = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 22.5rem;
  padding: 1.5rem;
  border-radius: 6px;

  @media (min-width: 900px) {
    min-width: 32rem;
    padding: 2.5rem 3rem;
  }

  background-color: ${({theme}) => theme["gray-800"]};

  form {
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;

    .TransactionData {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;

      input {
        padding: 1rem;
        background-color: ${({theme}) => theme["gray-900"]};
        border: 0;
        border-radius: 6px;
        color: ${({theme}) => theme["gray-300"]};

        ::placeholder {
          color: ${({theme}) => theme["gray-500"]};
        }
      }
    }

    button[type="submit"] {
      height: 3.5rem;
      border: 0;
      border-radius: 6px;
      margin-top: 2.5rem;
      background-color: ${({theme}) => theme["green-500"]};
      color: ${({theme}) => theme.white};
      font-weight: 700;
      cursor: pointer;

      &:hover {
        background-color: ${({theme}) => theme["green-700"]};
        transition: background-color 0.2s;
      }
    }
  }
`

export const DialogClose = styled(Dialog.Close)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background-color: transparent;
  border: 0;
  line-height: 0;
  color: ${({theme}) => theme["gray-400"]};
  cursor: pointer;

  &:hover {
    color: ${({theme}) => theme["red-700"]};
    transition: color 0.2s;
  }
`

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin-top: 1.5rem;
`

interface TransactionTypeButtonProps {
  variant: 'income' | 'expense'
}

export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  border: 0;
  color: ${({theme}) => theme["gray-300"]};
  background-color: ${({theme}) => theme["gray-700"]};
  border-radius: 6px;
  padding: 1rem 0;
  cursor: pointer;

  svg {
    color: ${({theme, variant}) => variant === "income" ? theme["green-500"] : theme["red-500"]};
  }

  &[data-state='unchecked']:hover {
    background-color: ${({theme}) => theme["gray-600"]};
  }

  &[data-state='checked'] {
    color: ${({theme}) => theme.white};
    background-color: ${({theme, variant}) => variant === "income" ? theme["green-500"] : theme["red-500"]};

    svg {
      color: ${({theme}) => theme.white};
    }
  }
`
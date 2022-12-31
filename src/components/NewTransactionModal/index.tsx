import * as Dialog from "@radix-ui/react-dialog";

import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";

import { DialogClose, DialogContent, DialogOverlay, TransactionType, TransactionTypeButton } from "./styles";

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <DialogOverlay />

      <DialogContent>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <DialogClose>
          <X size={24} />
        </DialogClose>

        <form>
          <div className="TransactionData">
            <input type="text" placeholder="Descrição" />
            <input type="number" placeholder="Preço" />
            <input type="text" placeholder="Categoria" />
          </div>

          <TransactionType>
            <TransactionTypeButton value="income" variant="income">
              <ArrowCircleUp size={24} />
              Entrada
            </TransactionTypeButton>

            <TransactionTypeButton value="expense" variant="expense">
              <ArrowCircleDown size={24} />
              Saída
            </TransactionTypeButton>
          </TransactionType>

          <button type="submit">Cadastrar</button>
        </form>
      </DialogContent>

    </Dialog.Portal>
  )
}
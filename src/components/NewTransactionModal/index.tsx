import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";

import { DialogClose, DialogContent, DialogOverlay } from "./styles";

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
          <div>
            <input type="text" placeholder="Descrição" />
            <input type="number" placeholder="Preço" />
            <input type="text" placeholder="Categoria" />
          </div>
          <button type="submit">Cadastrar</button>
        </form>
      </DialogContent>

    </Dialog.Portal>
  )
}
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { DialogClose, DialogContent, DialogOverlay, TransactionType, TransactionTypeButton } from "./styles";

import { useForm, Controller } from "react-hook-form";
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const NewTransactionFormSchema = z.object({
  description: z.string().min(3, { message: "A descrição deve conter no mínimo 3 caracteres" }),
  price: z.number().min(1, { message: "Informe o valor da transação" }),
  category: z.string().min(3, { message: "A categoria deve conter no mínimo 3 caracteres" }),
  type: z.enum(['income', 'expense'])
})

type NewTransactionFormSchemaProps = z.infer<typeof NewTransactionFormSchema>

export function NewTransactionModal() {

  const { register, control, handleSubmit, formState: { isSubmitting } } = useForm<NewTransactionFormSchemaProps>({
    resolver: zodResolver(NewTransactionFormSchema),
    defaultValues: {
      type: 'income'
    }
  })

  function handleCreateNewTransaction(data: NewTransactionFormSchemaProps) {
    console.log(data)
  }

  return (
    <Dialog.Portal>
      <DialogOverlay />

      <DialogContent>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <DialogClose>
          <X size={24} />
        </DialogClose>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <div className="TransactionData">
            <input type="text" placeholder="Descrição" {...register('description')} />
            <input type="number" placeholder="Preço" {...register('price', { valueAsNumber: true })} />
            <input type="text" placeholder="Categoria" {...register('category')} />
          </div>

          <Controller
            name="type"
            control={control}
            render={({ field }) => {
              return (
                <TransactionType onValueChange={field.onChange} value={field.value}>
                  <TransactionTypeButton value="income" variant="income">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionTypeButton>

                  <TransactionTypeButton value="expense" variant="expense">
                    <ArrowCircleDown size={24} />
                    Saída
                  </TransactionTypeButton>
                </TransactionType>
              )
            }}
          />

          <button type="submit" disabled={isSubmitting}>Cadastrar</button>
        </form>
      </DialogContent>

    </Dialog.Portal>
  )
}
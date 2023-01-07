import { MagnifyingGlass } from "phosphor-react";
import { SearchContainer } from "./styles";

import { useForm } from "react-hook-form";
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const SearchFormSchema = z.object({
  query: z.string()
})

type SearchFormSchemaProps = z.infer<typeof SearchFormSchema>

export function SearchTransactionForm() {

  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SearchFormSchemaProps>({
    resolver: zodResolver(SearchFormSchema)
  })

  function handleNewSearch(data: SearchFormSchemaProps) {
    console.log(data)
  }

  return (
    <SearchContainer onSubmit={handleSubmit(handleNewSearch)}>
      <input 
        type="text" 
        placeholder="Buscar transações" 
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={22} />
      </button>
    </SearchContainer>
  )
}
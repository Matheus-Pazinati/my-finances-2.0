import { MagnifyingGlass } from 'phosphor-react'
import { SearchContainer } from './styles'

import { useForm } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { TransactionsContext } from '../../context/TransactionsContext'

const SearchFormSchema = z.object({
  query: z.string(),
})

type SearchFormSchemaProps = z.infer<typeof SearchFormSchema>

export function SearchTransactionForm() {
  const { getTransactionsData } = useContext(TransactionsContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormSchemaProps>({
    resolver: zodResolver(SearchFormSchema),
  })

  async function handleNewSearch(data: SearchFormSchemaProps) {
    await getTransactionsData(data.query)
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

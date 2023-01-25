import { MagnifyingGlass, XCircle } from 'phosphor-react'
import { SearchContainer, SearchButton, CancelSearchButton } from './styles'

import { useForm } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { TransactionsContext } from '../../context/TransactionsContext'
import { useContextSelector } from 'use-context-selector'
import { useState } from 'react'

const SearchFormSchema = z.object({
  query: z.string(),
})

type SearchFormSchemaProps = z.infer<typeof SearchFormSchema>

export function SearchTransactionForm() {
  const getTransactionsData = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.getTransactionsData
    },
  )

  const [isSearching, setIsSearching] = useState(false)

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
      {isSearching ? (
        <CancelSearchButton
          type="submit"
          disabled={isSubmitting}
          themeColor="red"
        >
          <XCircle size={22} />
        </CancelSearchButton>
      ) : (
        <SearchButton type="submit" disabled={isSubmitting} themeColor="green">
          <MagnifyingGlass size={22} />
        </SearchButton>
      )}
    </SearchContainer>
  )
}

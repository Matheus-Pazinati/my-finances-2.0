import { MagnifyingGlass, X } from 'phosphor-react'
import { SearchContainer, SearchButton } from './styles'

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
    reset,
    formState: { isSubmitting },
  } = useForm<SearchFormSchemaProps>({
    resolver: zodResolver(SearchFormSchema),
  })

  function handleNewSearch(data: SearchFormSchemaProps) {
    getTransactionsData(data.query)
    setIsSearching(true)
  }

  async function handleCancelSearch() {
    reset()
    await getTransactionsData()
    setIsSearching(false)
  }

  return (
    <SearchContainer onSubmit={handleSubmit(handleNewSearch)}>
      <div className="InputContainer">
        <input
          type="text"
          placeholder="Buscar transações"
          {...register('query')}
        />
        {isSearching && (
          <button className="CancelSearchButton" title="Cancelar busca">
            <X size={22} color={'#AB222E'} />
          </button>
        )}
      </div>

      <SearchButton type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={22} />
      </SearchButton>
    </SearchContainer>
  )
}

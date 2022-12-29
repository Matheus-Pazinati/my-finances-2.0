import { MagnifyingGlass } from "phosphor-react";
import { SearchContainer } from "./styles";

export function SearchTransactionForm() {
  return (
    <SearchContainer>
      <input type="text" placeholder="Buscar transações" />
      <button type="submit">
        <MagnifyingGlass size={22} />
      </button>
    </SearchContainer>
  )
}
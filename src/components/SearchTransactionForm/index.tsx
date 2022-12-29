import { MagnifyingGlass } from "phosphor-react";

export function SearchTransactionForm() {
  return (
    <form>
      <input type="text" placeholder="Buscar transações" />
      <button type="submit">
        <MagnifyingGlass size={22} />
      </button>
    </form>
  )
}
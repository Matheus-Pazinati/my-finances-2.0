import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsTable } from "../../components/TransactionsTable";
import { TransactionsProvider } from "../../context/TransactionsContext";

export function Transactions() {
  return (
    <TransactionsProvider>
      <Header />
      <Summary />
      <TransactionsTable />
    </TransactionsProvider>
  )
}
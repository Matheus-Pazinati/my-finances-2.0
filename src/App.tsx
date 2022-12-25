import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>My finances 2.0</h1>
    </ThemeProvider>
  )
}
import { useState } from "react"
import { DefaultTheme, ThemeProvider } from "styled-components"
import { Header } from "./components/Header"
import { Input } from "./components/Input"
import { GlobalStyles } from "./styles/global"
import { Container } from "./styles/home"
import dark from "./styles/themes/dark"
import light from "./styles/themes/light"

function App() {
  const [theme, setTheme] = useState<DefaultTheme>(dark)

  function handleSwitchTheme() {
    theme.title === "dark" ? setTheme(light) : setTheme(dark)
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header handleSwitchTheme={handleSwitchTheme} theme={theme.title} />
        <Input />
      </Container>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App

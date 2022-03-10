import React from "react"
import { useState } from "react"
import { DefaultTheme, ThemeProvider } from "styled-components"
import { DevCard } from "./components/DevCard"
import { Header } from "./components/Header"
import { Input } from "./components/Input"
import { GlobalStyles } from "./styles/global"
import { Container } from "./styles/home"
import dark from "./styles/themes/dark"
import light from "./styles/themes/light"

function App() {
  const [theme, setTheme] = useState<DefaultTheme>(dark);

  const [username, setUsername] = useState("");

  function handleChangeInput(data: string) {
    setUsername(data);
  }

  function handleSearchUser() {
    console.log(username)
  }

  function handleSwitchTheme() {
    theme.title === "dark" ? setTheme(light) : setTheme(dark);
  }

  const inputRef = React.createRef<HTMLInputElement>();
 
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header handleSwitchTheme={handleSwitchTheme} theme={theme.title} />
        <Input handleSearchUser={handleSearchUser} handleChangeInput={handleChangeInput} />
        <DevCard />
      </Container>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App

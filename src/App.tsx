import React from "react"
import { useState } from "react"
import 'react-toastify/dist/ReactToastify.min.css'; 
import { ToastContainer, toast } from "react-toastify"
import { DefaultTheme, ThemeProvider } from "styled-components"
import { DevCard } from "./components/DevCard"
import { Header } from "./components/Header"
import { Input } from "./components/Input"
import { api } from "./services/api"
import { GlobalStyles } from "./styles/global"
import { Container } from "./styles/home"
import dark from "./styles/themes/dark"
import light from "./styles/themes/light"

type User = {
  name: string;
  username: string;
  avatar_url: string;
  bio: string;
  location: string;
  company: string;
  blog: string;
  twitter_username: string;
}

type AccountInformations = {
  created_at: string;
  followers: number;
  following: number;
  public_repos: number;
}

function App() {
  const [theme, setTheme] = useState<DefaultTheme>(dark);

  const [username, setUsername] = useState("");

  const [user, setUser] = useState<User>();
  const [accountInformations, setAccountInformations] = useState<AccountInformations>();

  function handleChangeInput(data: string) {
    setUsername(data);
  }

  async function handleSearchUser() {
    try {
      const response = await api.get(`${username}`)
      const data = response.data;

      const user: User = {
        name: data.name,
        avatar_url: data.avatar_url,
        bio: data.bio,
        blog: data.blog,
        company: data.company,
        location: data.location,
        twitter_username: data.twitter_username,
        username
      }
  
      const account: AccountInformations = {
        followers: data.followers,
        following: data.following,
        public_repos: data.public_repos,
        created_at: new Date(data.created_at).toLocaleDateString("en-US", {
          day: "2-digit",
          month: "short",
          year: "numeric"
        })
      }
  
      setUser(user);
      setAccountInformations(account)

    } catch(error) {
      toast.error("User not found!")
    }  
  }

  function handleSwitchTheme() {
    theme.title === "dark" ? setTheme(light) : setTheme(dark);
  }
 
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <ToastContainer theme="colored" autoClose={3000} pauseOnHover={false} toastStyle={{ backgroundColor: "#FF0000", color:"#fff" }}/>
        <Header handleSwitchTheme={handleSwitchTheme} theme={theme.title} />
        <Input handleSearchUser={handleSearchUser} handleChangeInput={handleChangeInput} />
        <DevCard user={user} account={accountInformations}/>
      </Container>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App

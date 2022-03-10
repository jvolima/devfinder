import { Container } from "./styles";
import { FiSun, FiMoon } from "react-icons/fi"

interface HeaderProps {
  handleSwitchTheme: () => void;
  theme: string;
}

export function Header({ handleSwitchTheme, theme }: HeaderProps) {
  return (
    <Container>
      <h1>devfinder</h1>
      <div>
        <h2>{theme === "dark" ? "light" : "dark"}</h2>
        <button type="button" onClick={handleSwitchTheme}>
          {
            theme === "dark" ? <FiSun fill="#fff" size="1.5rem"/>
            : <FiMoon fill="#011126" size="1.5rem"/>
          }
        </button>
      </div>
    </Container>
  )
}
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%
    }
  }

  :root {
    --background: ${props => props.theme.colors.background};
    --primary: ${props => props.theme.colors.primary};
    --secondary: ${props => props.theme.colors.secondary};
    --text: ${props => props.theme.colors.text};
    --gray-400: ${props => props.theme.colors.gray};
  }

  body {
    background: ${props => props.theme.colors.background}
  }

  body, input, select, button, textarea {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: ${props => props.theme.colors.text}
  }

  button {
    cursor: pointer;
  }
`
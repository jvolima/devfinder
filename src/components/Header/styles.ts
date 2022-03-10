import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 960px;
  width: 100%;

  div {
    display: flex;
    align-items: center;

    h2 {
      margin-right: 10px;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      font-size: 1.125rem;
      font-weight: normal;
    }

    button {
      background: transparent;
      border: 0;
    }
  }
`
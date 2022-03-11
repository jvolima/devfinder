import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100vw;
  padding: 1rem 1rem;
  justify-content: center;
  flex-direction: column;

  .errorAlert {
    background-color: #FF0000;
    color: #fff;

    @media (max-width: 500px) {
      max-width: 200px;
      float: right;
      margin: 1rem 1rem;
    }
  }
`
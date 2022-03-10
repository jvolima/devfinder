import styled from "styled-components";

export const Container = styled.main`
  margin-top: 2rem;
  display: flex;
  background: ${props => props.theme.colors.primary};
  max-width: 960px;
  width: 100%;
  min-height: 300px;
  padding: 2rem 1rem;
  border-radius: 1rem;

  .withoutUser {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
  }
`

export const ContainerUser = styled.div`
  
`
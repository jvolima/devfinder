import styled from "styled-components";

export const Container = styled.main`
  margin-top: 2rem;
  display: flex;
  background: ${props => props.theme.colors.primary};
  max-width: 960px;
  width: 100%;
  padding: 2rem 1rem;
  border-radius: 1rem;
`
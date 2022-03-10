import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: 3rem;
  max-width: 960px;
  width: 100%;
  background: ${props => props.theme.colors.primary};
  height: 5rem;
  padding: 0 1rem;
  border-radius: 1rem;
  align-items: center;

  input {
    background: transparent;
    outline: none;
    border: 0;
    max-width: 740px;
    width: 100%;
    font-size: 1.25rem;
  }

  .icon {
    background: transparent;
    border: 0;
    margin-right: 2rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }

  .search {
    background: ${props => props.theme.colors.secondary};
    border: 0;
    border-radius: 0.5rem;
    padding: 0.9rem 1.5rem;

    transition: filter 0.2s;

    p {
      color: #fff;
    }

    &:hover {
      filter: brightness(0.8);
    }
  }
`
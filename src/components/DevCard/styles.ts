import styled from "styled-components";

export const Container = styled.main`
  margin-top: 2rem;
  display: flex;
  background: ${props => props.theme.colors.primary};
  max-width: 960px;
  width: 100%;
  min-height: 400px;
  padding: 3rem 3rem;
  border-radius: 1rem;

  .withoutUser {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
  }

  @media (max-width: 440px) {
    padding: 1rem 3rem;
  } 
`

export const ContainerUser = styled.div`
  width: 100%;

  .boxImage {
    width: 20%;
    float: left;

    img {
      width: 9rem;
      height: 9rem;
      border-radius: 9rem;
    }
  }

  .boxContent {
    width: 80%;
    float: right;

    .nameAndCreatedAt {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h1 {
        font-size: 1.5rem;
      }

      time {
        font-size: 1rem;
        color: var(--gray-400)
      }

      .mobileAvatar {
        display: none;
      }
    }

    .username {
      display: block;
      margin-top: 0.75rem;
      text-decoration: none;
      color: ${props => props.theme.colors.secondary}
    }

    p {
      margin-top: 1.25rem;
      max-width: 400px;
      color: var(--gray-400)
    }

    .accountInfos {
      margin-top: 1.75rem;
      background: ${props => props.theme.colors.background};
      border-radius: 1rem;
      padding: 1.25rem 2rem;
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));

      h3 {
        font-size: 1.125rem;
        font-weight: 400;
        color: var(--gray-400);
      }

      span {
        font-size: 1.5rem;
        font-weight: bold;
        display: block;
        margin-top: 0.25rem;
      }
    }

    .userInfos {
      margin-top: 1.75rem;
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));

      div {
        display: flex;
        align-items: center;

        h4 {
          margin-left: 0.75rem;
        }

        .notAvailable {
          color: var(--gray-400)
        }
      }

      @media (max-width: 570px) {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .divBlog {
          display: none;
        }
      }
    }
  }

  @media (max-width: 860px) {
    .boxImage {
      display: none;
    }

    .boxContent {
      width: 100%;

      .nameAndCreatedAt {
        time {
          display: none;
        }

        .mobileAvatar {
          width: 60px;
          height: 60px;
          border-radius: 60px;
          display: flex;
        }
      }
    }
  }
`
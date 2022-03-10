import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container, ContainerUser } from "./styles";

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
  followers: number;
  following: number;
  public_repos: number;
}

interface DevCardProps {
  user?: User;
  account?: AccountInformations;
}

export function DevCard({ user, account }: DevCardProps) {
  return (
    <Container>
      {
        user && account ?
        <ContainerUser>
          
        </ContainerUser>
        :  
        <div className="withoutUser">
          <h1>Procure por devs na barra de pesquisa 🚀</h1>
        </div>
      }
    </Container>
  )
}
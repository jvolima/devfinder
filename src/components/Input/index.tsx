import { Container } from "./styles";
import { FiSearch } from "react-icons/fi";
import React, { Ref, useState } from "react";

interface InputProps {
  handleSearchUser: () => void;
  handleChangeInput: (data: string) => void;
}

export function Input({ handleSearchUser, handleChangeInput }: InputProps) {
  return (
    <Container>
      <button type="button" className="icon">
        <FiSearch size="2rem" color="var(--blue-600)" />
      </button>

      <input
        onChange={(data) => handleChangeInput(data.currentTarget.value)} 
        type="text" 
        placeholder="Search Github username" 
      />

      <button onClick={handleSearchUser} className="search">
        <p>Search</p>
      </button>
    </Container>
  )
}
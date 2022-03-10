import { Container } from "./styles";
import { FiSearch } from "react-icons/fi";

export function Input() {
  return (
    <Container>
      <button type="button" className="icon">
        <FiSearch size="2rem" color="var(--blue-600)" />
      </button>

      <input type="text" placeholder="Search Github username" />

      <button className="search">
        <p>Search</p>
      </button>
    </Container>
  )
}
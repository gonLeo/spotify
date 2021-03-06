import React from "react";
import { Container, Search, User } from "./styles";

function Header() {
  return (
    <Container>
      <Search>
        <input placeholder="Search" />
      </Search>

      <User>
        <img
          src="https://avatars3.githubusercontent.com/u/37338490?v=4"
          alt="Avatar"
        />
        Leonardo Gonçalves
      </User>
    </Container>
  );
}

export default Header;

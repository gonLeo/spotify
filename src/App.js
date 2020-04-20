import React from "react";
import GlobalStyle from "./styles/global";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import { Wrapper, Container } from "./styles/components";

function App() {
  return (
    <React.Fragment>
      <Wrapper>
        <Container>
          <Sidebar />
        </Container>
        <Player />
      </Wrapper>
      <GlobalStyle />
    </React.Fragment>
  );
}

export default App;

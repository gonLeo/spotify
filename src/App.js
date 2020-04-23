import React from "react";
import GlobalStyle from "./styles/global";
import { BrowserRouter } from 'react-router-dom'

import './config/reactotron';
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Header from "./components/Header";

import { Wrapper, Container, Content } from "./styles/components";
import Routes from './routes'

function App() {
  return (
    <BrowserRouter>
    <React.Fragment>
      <Wrapper>
        <Container>
          <Sidebar />
          <Content>
            <Header />
            <Routes/>
          </Content>
        </Container>
        <Player />
      </Wrapper>
      <GlobalStyle />
    </React.Fragment>
    </BrowserRouter>
  );
}

export default App;

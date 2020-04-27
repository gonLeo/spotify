import React from "react";
import { Provider } from "react-redux";
import GlobalStyle from "./styles/global";
import { BrowserRouter } from "react-router-dom";

import "./config/reactotron";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Header from "./components/Header";
import ErrorBox from "./components/ErrorBox";

import { Wrapper, Container, Content } from "./styles/components";
import Routes from "./routes";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <React.Fragment>
          <Wrapper>
            <Container>
              <Sidebar />
              <Content>
                <ErrorBox />
                <Header />
                <Routes />
              </Content>
            </Container>
            <Player />
          </Wrapper>
          <GlobalStyle />
        </React.Fragment>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

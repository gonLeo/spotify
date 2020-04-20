import React from "react";
import GlobalStyle from "./styles/global";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <React.Fragment>
      <Sidebar></Sidebar>
      <GlobalStyle />
    </React.Fragment>
  );
}

export default App;

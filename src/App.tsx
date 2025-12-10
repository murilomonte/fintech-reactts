import React from "react";
import Resumo from "./Pages/Resumo";
import Sidenav from "./Components/Sidenav";
import Header from "./Components/Header";

const App = () => {
  return (
    <div>
      <Sidenav />
      <div>
        <Header />
        <Resumo />
      </div>
    </div>
  );
};

export default App;

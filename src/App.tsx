import React from "react";
import Resumo from "./Pages/Resumo";
import Sidenav from "./Components/Sidenav";
import Header from "./Components/Header";
import { DataContextProvider } from "./Context/DataContext";
import Vendas from "./Pages/Vendas";

const App = () => {
  return (
    <DataContextProvider>
      <div className="container">
        <Sidenav />
        <div>
          <Header />
          <Resumo />
          <Vendas />
        </div>
      </div>
    </DataContextProvider>
  );
};

export default App;

import React from "react";
import Resumo from "./Pages/Resumo";
import Sidenav from "./Components/Sidenav";
import Header from "./Components/Header";
import { DataContextProvider } from "./Context/DataContext";

const App = () => {
  return (
    <DataContextProvider>
      <div>
        <Sidenav />
        <div>
          <Header />
          <Resumo />
        </div>
      </div>
    </DataContextProvider>
  );
};

export default App;

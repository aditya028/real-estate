import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Section from "./components/Section";
import Detail from "./components/Detail";
import Tenant from "./components/Tenant";
import NewTenant from "./components/NewTenant";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Route path="/" exact>
          <Section />
        </Route>
        <Route path="/detail/:currentId">
          <Detail />
        </Route>
        <Route path="/tenant/:currentId">
          <Tenant />
        </Route>
        <Route path="/new" exact>
          <NewTenant />
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App;

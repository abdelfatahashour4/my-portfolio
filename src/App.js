import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./page/Home";
import PageNotFound from "./page/PageNotFound";
import "./assets/css/global.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

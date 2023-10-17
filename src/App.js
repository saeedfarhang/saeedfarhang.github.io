import React from "react";
import { Route, HashRouter as Router, Switch } from "react-router-dom";
import NavBar from "./components/NavMenu/NavBar";
import HomePage from "./components/home/HomePage";

export default function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

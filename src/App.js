import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Todo from "./components/Todo";
import WhatFor from "./components/WhatFor";
import "./components/NavStyle.css";

function App() {
  return (
    <Router>
      <div>
        <NavBar>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/todo" component={Todo} />
            <Route path="/whatfor" component={WhatFor} />
          </Switch>
        </NavBar>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";

import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Signin />
          </Route>
          <Route path="/dashboard">
            <Header />
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

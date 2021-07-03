import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="AppGrid">
        <Switch>
          <Route exact path="/">
            <Signin />
          </Route>
          <Route path="/dashboard">
            <Sidebar className="sidebar" />
            <div className="main">
              <Header />
              <Dashboard />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

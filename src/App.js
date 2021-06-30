
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route exact path='/' component={Signin}></Route>
        <Route path='/Dashboard' component={Dashboard}></Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;

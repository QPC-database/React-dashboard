
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/error/NotFound.js"

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route exact path='/' component={Signin}></Route>
        <Route path='/Dashboard' component={Dashboard}></Route>
        <Route path='/404' component={NotFound}></Route>
        <Redirect to='/404' />
      </Switch>
      </div>
    </Router>
  );
}

export default App;

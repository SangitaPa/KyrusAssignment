import React, { Component } from "react";
import Logo from "./klogo.js";
import "./App.css";
import Employeelist from "./components/Employeelist";
import Editemployee from "./components/Editemployee";
import Addemployee from "./components/Addemployee";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import { Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo />
          <h1 className="App-title">Welcome to Kyruus</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="container body-content">
          <Router>
            <Switch>
              <Route path="/" exact component={Employeelist} />
              <Route path="/editemployee/:id" exact component={Editemployee} />
              <Route path="/addemployee" exact component={Addemployee} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;

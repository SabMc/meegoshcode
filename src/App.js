import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PrivatPolicy from "./pages/PrivatPolicy";

import ReactGA from "react-ga4";

ReactGA.initialize("G-K2QRWR3FG1");
ReactGA.send("pageview");


function App() {
  return (
    <div className="App">
      <Router>
    <Navbar />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/PrivatPolicy" component={PrivatPolicy} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;

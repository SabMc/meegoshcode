import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PrivatPolicy from "./pages/PrivatPolicy";


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

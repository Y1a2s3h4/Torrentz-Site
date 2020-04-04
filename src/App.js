import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import LandingPage from "./Components/Landing_Page";
import Search from "./Components/Search";
import Top from "./Components/Top";
import Trending from "./Components/Trending";
import Popular from "./Components/Popular";
function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/search" exact component={Search} />
        <Route path="/top" exact component={Top} />
        <Route path="/trending" component={Trending} />
        <Route path="/popular" component={Popular} />
      </Switch>
    </Router>
  );
}

export default App;

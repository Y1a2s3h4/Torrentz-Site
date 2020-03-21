import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Search from "./Components/Search";
function App() {
  return (
    <Router>
      <Nav />
      <Search />
    </Router>
  );
}

export default App;

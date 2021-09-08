import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";

import About from "./components/About";
import Users from "./components/Users";
import Home from "./components/Home";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;

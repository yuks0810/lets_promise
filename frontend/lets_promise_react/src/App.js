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
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link exact to="/">
                  <Button color="primary">
                    <AddCircleIcon />
                    Home
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

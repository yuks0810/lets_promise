import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import Header from "./components/Header";

import NavBarInfo from "./common/router";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <>
      <div>
        <Router>
          <Header />
          <div className={classes.root}>
            <Switch>
              {NavBarInfo.map((dict, index) => (
                <Route key={index} path={dict.path} exact={dict.exact}>
                  {dict.component}
                </Route>
              ))}
            </Switch>
          </div>
        </Router>
      </div>
    </>
  );
}

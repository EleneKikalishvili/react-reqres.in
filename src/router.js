import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/home";
import NotFound from "./pages/notFound";

const RouterComponent = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={Signup} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default RouterComponent;

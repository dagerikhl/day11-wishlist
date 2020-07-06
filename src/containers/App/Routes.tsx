import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { Admin } from "../Admin/Admin";
import { Home } from "../Home/Home";

export const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/admin">
      <Admin />
    </Route>

    <Redirect to="/" />
  </Switch>
);

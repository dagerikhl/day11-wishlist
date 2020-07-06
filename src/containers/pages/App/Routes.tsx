import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { PrivateRoute } from "../../../components/routing/PrivateRoute/PrivateRoute";
import { Admin } from "../Admin/Admin";
import { Home } from "../Home/Home";
import { Login } from "../Login/Login";

export const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/login">
      <Login />
    </Route>
    <PrivateRoute exact path="/admin">
      <Admin />
    </PrivateRoute>

    <Redirect to="/" />
  </Switch>
);

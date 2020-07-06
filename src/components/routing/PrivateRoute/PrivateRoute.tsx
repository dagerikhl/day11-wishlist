import React from "react";
import { Route, RouteProps } from "react-router-dom";
import { AuthCheck } from "reactfire";

import { UnauthenticatedMessage } from "../../status/UnauthenticatedMessage/UnauthenticatedMessage";
import { Suspended } from "../../suspense/Suspended/Suspended";

export const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => (
  <Route {...rest}>
    <Suspended traceId="private-route">
      <AuthCheck fallback={<UnauthenticatedMessage />}>{children}</AuthCheck>
    </Suspended>
  </Route>
);

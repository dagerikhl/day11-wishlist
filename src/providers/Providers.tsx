import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { FirebaseProvider } from "./FirebaseProvider";
import { PersonalizationProvider } from "./PersonalizationProvider";

const providers = [PersonalizationProvider, FirebaseProvider, Router].reverse();

export const Providers: React.FC = ({ children }) => {
  let providerTree: React.ReactNode = children;
  for (const provider of providers) {
    providerTree = React.createElement(provider, null, providerTree);
  }

  return <>{providerTree}</>;
};

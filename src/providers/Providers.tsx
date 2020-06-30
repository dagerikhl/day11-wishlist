import React from "react";

import { FirebaseProvider } from "./FirebaseProvider";
import { PersonalizationProvider } from "./PersonalizationProvider";

export const Providers: React.FC = ({ children }) => (
  <PersonalizationProvider>
    <FirebaseProvider>{children}</FirebaseProvider>
  </PersonalizationProvider>
);

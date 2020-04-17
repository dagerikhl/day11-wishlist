import React from "react";

import { PersonalizationProvider } from "./PersonalizationProvider";

export const Providers: React.FC = ({ children }) => (
  <PersonalizationProvider>{children}</PersonalizationProvider>
);

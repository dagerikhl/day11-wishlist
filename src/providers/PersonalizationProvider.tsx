import React from "react";

import {
  Personalization,
  PersonalizationStore,
} from "../contexts/Personalization";

const store: PersonalizationStore = {
  author: process.env.REACT_APP_AUTHOR || "",
  title: process.env.REACT_APP_TITLE || "",
};

export const PersonalizationProvider: React.FC = ({ children }) => (
  <Personalization.Provider value={store}>{children}</Personalization.Provider>
);

import React from "react";

import {
  Personalization,
  PersonalizationStore,
} from "../contexts/Personalization";
import { strings } from "./strings";

const store: PersonalizationStore = {
  author: process.env.REACT_APP_AUTHOR || "",
  title: process.env.REACT_APP_TITLE || "",
  strings,
};

export const PersonalizationProvider: React.FC = ({ children }) => (
  <Personalization.Provider value={store}>{children}</Personalization.Provider>
);

import React from "react";

import {
  Personalization,
  PersonalizationStore,
} from "../contexts/Personalization";
import strings from "../personalization/strings";

const store: PersonalizationStore = { strings };

export const PersonalizationProvider: React.FC = ({ children }) => (
  <Personalization.Provider value={store}>{children}</Personalization.Provider>
);

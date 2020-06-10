import React from "react";

import { PersonalizationStrings } from "../interfaces/PersonalizationStrings";

export interface PersonalizationStore {
  strings: PersonalizationStrings;
}

const defaultStore: PersonalizationStore = {
  strings: {} as PersonalizationStrings,
};

export const Personalization = React.createContext<PersonalizationStore>(
  defaultStore
);

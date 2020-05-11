import React from "react";

import { Strings } from "../providers/strings";

export interface PersonalizationStore {
  author: string;
  title: string;
  strings: Strings;
}

const defaultStore: PersonalizationStore = {
  author: "",
  title: "",
  strings: {} as Strings,
};

export const Personalization = React.createContext<PersonalizationStore>(
  defaultStore
);

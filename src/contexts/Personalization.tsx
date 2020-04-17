import React from "react";

export interface PersonalizationStore {
  author: string;
  title: string;
}

const defaultStore: PersonalizationStore = {
  author: "",
  title: "",
};

export const Personalization = React.createContext<PersonalizationStore>(
  defaultStore
);

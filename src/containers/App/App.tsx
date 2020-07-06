import React, { useContext } from "react";

import { Personalization } from "../../contexts/Personalization";
import { Routes } from "./Routes";

import styles from "./App.module.css";

import pkg from "../../../package.json";

export const App: React.FC = () => {
  const { strings } = useContext(Personalization);

  return (
    <section>
      <header className={styles.header}>
        <h1>
          <i className="bx bxs-heart" /> {strings.title}
        </h1>
      </header>

      <main className={styles.main}>
        <Routes />
      </main>

      <footer className={styles.footer}>
        <div>
          <i className="bx bx-copyright" />
          &nbsp;{strings.author} - 2020
        </div>

        <div>v{pkg.version}</div>
      </footer>
    </section>
  );
};

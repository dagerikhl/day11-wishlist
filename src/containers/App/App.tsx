import React, { useContext } from "react";

import { Personalization } from "../../contexts/Personalization";
import { Wishes } from "../Wishes/Wishes";

import styles from "./App.module.css";

import pkg from "../../../package.json";

export const App = () => {
  const { strings } = useContext(Personalization);

  return (
    <section>
      <header className={styles.header}>
        <h1>
          <i className="bx bxs-heart" /> {strings.title}
        </h1>
      </header>

      <main className={styles.main}>
        <div className={styles.description}>
          <p>{strings.lead[1]}</p>
          <p>{strings.lead[2]}</p>
          <p>{strings.lead[3]}</p>
        </div>

        <Wishes />
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

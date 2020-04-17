import React, { useContext } from "react";

import { Personalization } from "../../contexts/Personalization";

import styles from "./App.module.css";

export const App = () => {
  const { author, title } = useContext(Personalization);

  return (
    <section>
      <header className={styles.header}>
        <h1>&hearts; {title}</h1>
      </header>

      <main className={styles.main}>TODO Main</main>

      <footer className={styles.footer}>&copy; {author} - 2020</footer>
    </section>
  );
};

import React, { useContext } from "react";

import { Space } from "../../../components/layout/Space/Space";
import { Suspended } from "../../../components/suspense/Suspended/Suspended";
import { Personalization } from "../../../contexts/Personalization";
import LoginStatus from "./LoginStatus";
import { Routes } from "./Routes";

import styles from "./App.module.css";

import pkg from "../../../../package.json";

export const App: React.FC = () => {
  const { strings } = useContext(Personalization);

  return (
    <section>
      <header className={styles.header}>
        <h1>
          <i className="bx bxs-heart" /> {strings.title}
        </h1>

        <Suspended traceId="login-status">
          <LoginStatus />
        </Suspended>
      </header>

      <main className={styles.mainContainer}>
        <Space className={styles.main} element="main" top>
          <Routes />
        </Space>
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

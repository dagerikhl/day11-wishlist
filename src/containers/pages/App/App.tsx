import React, { useContext } from "react";

import { Suspended } from "../../../components/suspense/Suspended/Suspended";
import { Personalization } from "../../../contexts/Personalization";
import LoginStatus from "./LoginStatus";
import { Routes } from "./Routes";

import styles from "./App.module.css";

import bannerImage from "../../../assets/images/banner-image.png";
import pkg from "../../../../package.json";

export const App: React.FC = () => {
  const { strings } = useContext(Personalization);

  return (
    <section>
      <header className={styles.header}>
        <h1>
          <i className="bx bxs-heart" /> {strings.title}
        </h1>

        <div className={styles.headerImgContainer}>
          <img
            className={styles.headerImg}
            src={bannerImage}
            alt="Banner image"
          />
        </div>

        <Suspended traceId="login-status">
          <LoginStatus />
        </Suspended>
      </header>

      <main className={styles.main}>
        <Routes />
      </main>

      <footer className={styles.footer}>
        <div>
          <i className="bx bx-copyright" />
          &nbsp;{strings.author} - 2020
        </div>

        <div>
          {strings.contact.label}:{" "}
          <a
            className={styles.contactEmail}
            href={`mailto:${strings.contact.email}`}
          >
            {strings.contact.email}
          </a>
        </div>

        <div>v{pkg.version}</div>
      </footer>
    </section>
  );
};

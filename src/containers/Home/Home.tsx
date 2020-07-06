import React, { useContext } from "react";

import { Personalization } from "../../contexts/Personalization";
import { Wishes } from "../Wishes/Wishes";

import styles from "./Home.module.css";

export const Home: React.FC = () => {
  const { strings } = useContext(Personalization);

  return (
    <>
      <div className={styles.description}>
        <p>{strings.lead[1]}</p>
        <p>{strings.lead[2]}</p>
        <p>{strings.lead[3]}</p>
      </div>

      <Wishes />
    </>
  );
};

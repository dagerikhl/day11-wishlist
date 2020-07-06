import React, { useContext } from "react";

import { Space } from "../../../components/layout/Space/Space";
import { Personalization } from "../../../contexts/Personalization";
import { Wishes } from "../../domain/Wishes/Wishes";

import styles from "./Home.module.css";

export const Home: React.FC = () => {
  const { strings } = useContext(Personalization);

  return (
    <>
      <Space className={styles.description} bottom="large">
        <p>{strings.lead[1]}</p>
        <p>{strings.lead[2]}</p>
        <p>{strings.lead[3]}</p>
      </Space>

      <Wishes />
    </>
  );
};

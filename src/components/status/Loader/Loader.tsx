import React from "react";

import styles from "./Loader.module.css";

export const Loader: React.FC = () => (
  <div>
    <div className={styles.spinner}>
      <div className={styles.loader} />
    </div>
  </div>
);

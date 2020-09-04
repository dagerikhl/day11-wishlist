import React from "react";

import styles from "./Pool.module.css";

interface PoolProps {
  title?: string;
}

export const Pool: React.FC<PoolProps> = ({ title, children }) => (
  <div className={styles.container}>
    {title && <h2 className={styles.heading}>{title}</h2>}

    <div className={styles.pool}>{children}</div>
  </div>
);

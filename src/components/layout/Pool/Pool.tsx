import React from "react";

import styles from "./Pool.module.css";

interface PoolProps {
  title?: string;
}

export const Pool: React.FC<PoolProps> = ({ title, children }) => (
  <div className={styles.container}>
    {title && <div className={styles.heading}>{title}</div>}

    <div className={styles.pool}>{children}</div>
  </div>
);

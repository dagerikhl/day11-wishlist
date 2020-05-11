import React from "react";

import styles from "./Pool.module.css";

interface PoolProps {
  label?: string;
}

export const Pool: React.FC<PoolProps> = ({ label, children }) => (
  <div className={styles.container}>
    {label && <div className={styles.heading}>{label}</div>}

    <div className={styles.pool}>{children}</div>
  </div>
);

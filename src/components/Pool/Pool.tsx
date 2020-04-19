import React from "react";

import styles from "./Pool.module.css";

export const Pool: React.FC = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

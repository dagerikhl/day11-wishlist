import React from "react";

import { cz } from "../../helpers/cz";

import styles from "./VisualCheckbox.module.css";

interface VisualCheckboxProps {
  checked: boolean;
}

export const VisualCheckbox: React.FC<VisualCheckboxProps> = ({ checked }) => (
  <div className={cz(styles.container, checked && styles.active)}>
    {checked && <div className={styles.checkmark}>&#10004;</div>}
  </div>
);

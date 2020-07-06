import cz from "classnames";
import React from "react";

import styles from "./Checkbox.module.css";

interface CheckboxProps {
  checked: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({ checked }) => (
  <div className={cz(styles.container, checked && styles.active)}>
    {checked && <div className={cz(styles.checkmark, "bx", "bx-check")} />}
  </div>
);

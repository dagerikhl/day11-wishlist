import React from "react";

import { cz } from "../../helpers/cz";

import styles from "./Checkbox.module.css";

interface CheckboxProps {
  checked: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({ checked }) => (
  <div className={cz(styles.container, checked && styles.active)}>
    {checked && <div className={cz(styles.checkmark, "bx", "bx-check")} />}
  </div>
);

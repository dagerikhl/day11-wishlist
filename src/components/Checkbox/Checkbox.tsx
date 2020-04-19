import React from "react";

import styles from "./Checkbox.module.css";

interface CheckboxProps {
  checked: boolean;
  onChange: (value: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => {
  const onClick = () => {
    onChange(!checked);
  };

  return (
    <div className={styles.container} onClick={onClick}>
      {checked && <div className={styles.checkmark}>&#10004;</div>}
    </div>
  );
};

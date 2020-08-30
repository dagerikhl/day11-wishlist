import cz from "classnames";
import React from "react";

import { Space, SpaceProps } from "../../layout/Space/Space";

import styles from "./Checkbox.module.css";

interface Props {
  checked: boolean;
}

type CheckboxProps = Props & SpaceProps;

export const Checkbox: React.FC<CheckboxProps> = ({ checked, ...rest }) => (
  <Space className={cz(styles.container, checked && styles.active)} {...rest}>
    {checked && <div className={cz(styles.checkmark, "bx", "bx-check")} />}
  </Space>
);

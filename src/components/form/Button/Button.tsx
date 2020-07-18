import cz from "classnames";
import React from "react";

import styles from "./Button.module.css";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button: React.FC<Props> = ({ className, ...rest }) => (
  <button
    className={cz("day11-field-base", styles.button, className)}
    {...rest}
  />
);

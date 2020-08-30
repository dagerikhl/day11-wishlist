import cz from "classnames";
import React from "react";

import { Space, SpaceProps } from "../../layout/Space/Space";

import styles from "./Button.module.css";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  SpaceProps;

export const Button: React.FC<Props> = ({ className, vertical, ...rest }) => (
  <Space
    className={cz("day11-field-base", styles.button, className)}
    element="button"
    vertical={vertical === undefined ? true : vertical}
    {...rest}
  />
);

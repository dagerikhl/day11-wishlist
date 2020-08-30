import cz from "classnames";
import React from "react";

import { Space, SpaceProps } from "../../layout/Space/Space";

import styles from "./Input.module.css";

interface Props {
  label?: React.ReactNode;
}

type InputProps = Props &
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > &
  SpaceProps;

export const Input: React.FC<InputProps> = ({
  className,
  label,
  type,
  element,
  vertical,
  top,
  right,
  bottom,
  left,
  ...rest
}) => {
  const classes = cz("day11-field-base", className);

  const input = <input className={classes} type={type} {...rest} />;

  return (
    <Space top={top} right={right} bottom={bottom} left={left}>
      {label ? (
        <label
          className={cz(styles.label, {
            [styles.clickable]: type === "checkbox",
          })}
        >
          <Space right="small">{label}</Space>
          {input}
        </label>
      ) : (
        input
      )}
    </Space>
  );
};

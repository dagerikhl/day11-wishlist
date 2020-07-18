import cz from "classnames";
import React from "react";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const Input: React.FC<Props> = ({ className, ...rest }) => (
  <input className={cz("day11-field-base", className)} {...rest} />
);

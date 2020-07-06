import cz from "classnames";
import React from "react";

import styles from "./Space.module.css";

type SpaceType = boolean | "small" | "medium" | "large";

interface Props {
  className?: string;
  element?: string;
  top?: SpaceType;
  right?: SpaceType;
  bottom?: SpaceType;
  left?: SpaceType;
}

export const Space: React.FC<Props> = ({
  className,
  element = "div",
  top,
  right,
  bottom,
  left,
  children,
}) =>
  React.createElement(
    element,
    {
      className: cz(className, {
        [styles.topSmall]: top === "small",
        [styles.topMedium]: top === "medium" || top === true,
        [styles.topLarge]: top === "large",
        [styles.rightSmall]: right === "small",
        [styles.rightMedium]: right === "medium" || right === true,
        [styles.rightLarge]: right === "large",
        [styles.bottomSmall]: bottom === "small",
        [styles.bottomMedium]: bottom === "medium" || bottom === true,
        [styles.bottomLarge]: bottom === "large",
        [styles.leftSmall]: left === "small",
        [styles.leftMedium]: left === "medium" || left === true,
        [styles.leftLarge]: left === "large",
      }),
    },
    children
  );
import cz from "classnames";
import React from "react";

import styles from "./Space.module.css";

type SpaceType = boolean | "x-small" | "small" | "medium" | "large";

export interface SpaceProps {
  className?: string;
  element?: string;
  vertical?: boolean;
  top?: SpaceType;
  right?: SpaceType;
  bottom?: SpaceType;
  left?: SpaceType;
}

export const Space: React.FC<SpaceProps> = ({
  className,
  element = "div",
  vertical,
  top,
  right,
  bottom,
  left,
  children,
  ...rest
}) =>
  React.createElement(
    element,
    {
      className: cz(className, styles.space, {
        [styles.spaceVertical]: !!vertical,
        [styles.topXSmall]: top === "x-small",
        [styles.topSmall]: top === "small",
        [styles.topMedium]: top === "medium" || top === true,
        [styles.topLarge]: top === "large",
        [styles.rightXSmall]: right === "x-small",
        [styles.rightSmall]: right === "small",
        [styles.rightMedium]: right === "medium" || right === true,
        [styles.rightLarge]: right === "large",
        [styles.bottomXSmall]: bottom === "x-small",
        [styles.bottomSmall]: bottom === "small",
        [styles.bottomMedium]: bottom === "medium" || bottom === true,
        [styles.bottomLarge]: bottom === "large",
        [styles.leftXSmall]: left === "x-small",
        [styles.leftSmall]: left === "small",
        [styles.leftMedium]: left === "medium" || left === true,
        [styles.leftLarge]: left === "large",
      }),
      ...rest,
    },
    children
  );

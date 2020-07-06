import cz from "classnames";
import React from "react";

import styles from "./Space.module.css";

type SpaceType = boolean | "small" | "medium" | "large";

interface Props {
  top?: SpaceType;
  right?: SpaceType;
  bottom?: SpaceType;
  left?: SpaceType;
}

export const Space: React.FC<Props> = ({ top, right, bottom, left, children }) => (
  <div
    className={cz({
      [styles.TopSmall]: top === "small",
      [styles.TopMedium]: top === "medium" || top === true,
      [styles.TopLarge]: top === "large",
      [styles.RightSmall]: right === "small",
      [styles.RightMedium]: right === "medium" || right === true,
      [styles.RightLarge]: right === "large",
      [styles.BottomSmall]: bottom === "small",
      [styles.BottomMedium]: bottom === "medium" || bottom === true,
      [styles.BottomLarge]: bottom === "large",
      [styles.LeftSmall]: left === "small",
      [styles.LeftMedium]: left === "medium" || left === true,
      [styles.LeftLarge]: left === "large",
    })}
  >
    {children}
  </div>
);

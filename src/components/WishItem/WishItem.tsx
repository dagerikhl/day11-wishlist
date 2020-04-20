import React, { useState } from "react";

import { cz } from "../../helpers/cz";
import { Wish } from "../../interfaces/Wish";
import { VisualCheckbox } from "../Checkbox/VisualCheckbox";

import styles from "./WishItem.module.css";

interface WishItemProps {
  wish: Wish;
}

// FIXME
export const WishItem: React.FC<WishItemProps> = ({ wish }) => {
  const [isChecked, setIsChecked] = useState(false);

  const onClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div
      className={cz(styles.container, isChecked && styles.grayscale)}
      title={
        isChecked
          ? "Klikk for å markere at varen ikke er kjøpt likevel"
          : "Klikk for å markere at du har kjøpt denne gaven"
      }
      onClick={onClick}
    >
      <VisualCheckbox checked={isChecked} />

      <img className={styles.icon} src={wish.icon} alt={wish.title} />

      <div className={styles.textContainer}>
        <h1 className={styles.title}>{wish.title}</h1>
        <h2 className={styles.description}>{wish.description}</h2>

        <a
          href={wish.url}
          title="Klikk for å gå til ønsket"
          target="_blank"
          rel="noopener noreferrer"
        >
          {wish.url}
        </a>
      </div>
    </div>
  );
};

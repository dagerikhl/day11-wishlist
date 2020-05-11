import React, { useContext, useState } from "react";
import { Personalization } from "../../contexts/Personalization";

import { cz } from "../../helpers/cz";
import { Wish } from "../../interfaces/Wish";
import { VisualCheckbox } from "../Checkbox/VisualCheckbox";

import styles from "./WishItem.module.css";

interface WishItemProps {
  wish: Wish;
}

// FIXME
export const WishItem: React.FC<WishItemProps> = ({ wish }) => {
  const { strings } = useContext(Personalization);

  const [isChecked, setIsChecked] = useState(wish.aquired);

  const onClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div
      className={cz(styles.container, isChecked && styles.grayscale)}
      title={
        isChecked
          ? strings["check-wish.checked"]
          : strings["check-wish.unchecked"]
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
          title={strings["goto.wish-url"]}
          target="_blank"
          rel="noopener noreferrer"
        >
          {wish.url}
        </a>
      </div>
    </div>
  );
};

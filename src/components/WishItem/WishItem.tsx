import React, { useContext, useState } from "react";
import { Personalization } from "../../contexts/Personalization";

import { cz } from "../../helpers/cz";
import { Wish } from "../../interfaces/Wish";
import { Checkbox } from "../Checkbox/Checkbox";
import ExternalAnchor from "../ExternalAnchor/ExternalAnchor";

import styles from "./WishItem.module.css";

interface WishItemProps {
  wish: Wish;
}

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
      <Checkbox checked={isChecked} />

      <div className={styles.contentContainer}>
        <img className={styles.icon} src={wish.icon} alt={wish.title} />

        <div className={styles.textContainer}>
          <h1 className={styles.title}>{wish.title}</h1>
          <h2 className={styles.description}>{wish.description}</h2>

          <ExternalAnchor href={wish.url} title={strings["goto.wish-url"]} />
        </div>
      </div>
    </div>
  );
};

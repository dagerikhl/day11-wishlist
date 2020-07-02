import React, { useContext } from "react";
import { useFirestore } from "reactfire";

import { Personalization } from "../../contexts/Personalization";
import { cz } from "../../helpers/cz";
import { Wish } from "../../interfaces/Wish";
import { Checkbox } from "../Checkbox/Checkbox";
import ExternalAnchor from "../ExternalAnchor/ExternalAnchor";

import styles from "./WishItem.module.css";

interface WishItemProps {
  documentId: string;
  wish: Wish;
}

export const WishItem: React.FC<WishItemProps> = ({ documentId, wish }) => {
  const { strings } = useContext(Personalization);

  const wishRef = useFirestore().collection("wishes").doc(documentId);

  const onClick = () => {
    wishRef.update({ aquired: !wish.aquired });
  };

  return (
    <div
      className={cz(styles.container, wish.aquired && styles.grayscale)}
      title={
        wish.aquired
          ? strings["check-wish"].checked
          : strings["check-wish"].unchecked
      }
      onClick={onClick}
    >
      <Checkbox checked={wish.aquired} />

      <div className={styles.contentContainer}>
        <img className={styles.icon} src={wish.icon} alt={wish.title} />

        <div className={styles.textContainer}>
          <h1 className={styles.title}>{wish.title}</h1>
          <h2 className={styles.description}>{wish.description}</h2>

          {wish.url && (
            <ExternalAnchor href={wish.url} title={strings.goto["wish-url"]} />
          )}
        </div>
      </div>
    </div>
  );
};

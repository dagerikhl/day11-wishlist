import React, { useState } from "react";

import { Wish } from "../../interfaces/Wish";
import { Checkbox } from "../Checkbox/Checkbox";

import styles from "./WishItem.module.css";

interface WishItemProps {
  wish: Wish;
}

// FIXME
export const WishItem: React.FC<WishItemProps> = ({ wish }) => {
  const [isChecked, setIsChecked] = useState(false);

  const onCheckedChange = (value: boolean) => {
    setIsChecked(value);
  };

  return (
    <div className={styles.container}>
      <Checkbox checked={isChecked} onChange={onCheckedChange} />

      <img className={styles.icon} src={wish.icon} alt={wish.title} />

      <div className={styles.textContainer}>
        <h1 className={styles.title}>{wish.title}</h1>
        <h2 className={styles.description}>{wish.description}</h2>

        <a href={wish.url} target="_blank" rel="noopener noreferrer">
          {wish.url}
        </a>
      </div>
    </div>
  );
};

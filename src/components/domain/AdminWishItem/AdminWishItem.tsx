import cz from "classnames";
import React from "react";
import { useFirestore } from "reactfire";

import { Wish } from "../../../interfaces/Wish";
import { InternalAnchor } from "../../elements/InternalAnchor/InternalAnchor";
import { Button } from "../../form/Button/Button";
import { Checkbox } from "../../form/Checkbox/Checkbox";

import styles from "./AdminWishItem.module.css";

interface AdminWishItemProps {
  documentId: string;
  wish: Wish;
  setSuccessMessage: (successMessage?: string) => void;
  setError: (error?: Error) => void;
}

export const AdminWishItem: React.FC<AdminWishItemProps> = ({
  documentId,
  wish,
  setSuccessMessage,
  setError,
}) => {
  const wishRef = useFirestore().collection("wishes").doc(documentId);

  const onDelete = () => {
    wishRef
      .delete()
      .then(() => {
        setSuccessMessage(`Wish ${documentId} deleted`);
      })
      .catch(setError);
  };

  return (
    <div className={cz(styles.container, wish.aquired && styles.grayscale)}>
      <Checkbox checked={wish.aquired} right />

      <div className={styles.contentContainer}>
        <h1 className={styles.title}>{wish.title}</h1>

        <div className={styles.actionsContainer}>
          <InternalAnchor to={`/admin/wishes/${documentId}`} type="button">
            <i className="bx bx-pencil" />
          </InternalAnchor>

          <Button onClick={onDelete} left>
            <i className="bx bx-trash" />
          </Button>
        </div>
      </div>
    </div>
  );
};

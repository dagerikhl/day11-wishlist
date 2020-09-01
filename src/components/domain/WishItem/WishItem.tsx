import cz from "classnames";
import React, { useContext } from "react";
import { confirmAlert } from "react-confirm-alert";
import { useFirestore } from "reactfire";

import { Personalization } from "../../../contexts/Personalization";
import { Wish } from "../../../interfaces/Wish";
import { Checkbox } from "../../form/Checkbox/Checkbox";
import { ExternalAnchor } from "../../elements/ExternalAnchor/ExternalAnchor";
import { Space } from "../../layout/Space/Space";
import { ConfirmPrompt } from "./ConfirmPrompt";

import styles from "./WishItem.module.css";

interface WishItemProps {
  documentId: string;
  wish: Wish;
  setSuccessMessage: (successMessage?: string) => void;
  setError: (error?: Error) => void;
}

export const WishItem: React.FC<WishItemProps> = ({
  documentId,
  wish,
  setSuccessMessage,
  setError,
}) => {
  const { strings } = useContext(Personalization);

  const firestore = useFirestore();

  const onClick = () => {
    confirmAlert({
      title:
        strings["check-wish"][wish.aquired ? "checked" : "unchecked"].confirm
          .title,
      message:
        strings["check-wish"][wish.aquired ? "checked" : "unchecked"].confirm
          .message,
      customUI: (props) => (
        <ConfirmPrompt
          {...props}
          confirmLabel={
            strings["check-wish"][wish.aquired ? "checked" : "unchecked"]
              .confirm.yes
          }
          declineLabel={
            strings["check-wish"][wish.aquired ? "checked" : "unchecked"]
              .confirm.no
          }
          onConfirm={() => {
            firestore
              .collection("wishes")
              .doc(documentId)
              .update({ aquired: !wish.aquired })
              .then(() => {
                setSuccessMessage(
                  strings["check-wish"][wish.aquired ? "checked" : "unchecked"]
                    .success
                );
              })
              .catch((error) => {
                error.message = `${
                  strings["check-wish"][wish.aquired ? "checked" : "unchecked"]
                    .error
                }: ${error.message}`;

                setError(error);
              });
          }}
        />
      ),
    });
  };

  return (
    <div
      className={cz(styles.container, wish.aquired && styles.grayscale)}
      title={
        wish.aquired
          ? strings["check-wish"].checked.action
          : strings["check-wish"].unchecked.action
      }
      onClick={onClick}
    >
      <Checkbox checked={wish.aquired} />

      <div className={styles.contentContainer}>
        {wish.icon && (
          <img className={styles.icon} src={wish.icon} alt={wish.title} />
        )}

        <div className={styles.textContainer}>
          <h1 className={styles.title}>{wish.title}</h1>
          <Space element="h2" className={styles.description} top="small">
            {wish.description}
          </Space>

          {wish.url && (
            <Space top="small">
              <ExternalAnchor
                href={wish.url}
                title={strings.goto["wish-url"]}
              />
            </Space>
          )}
        </div>
      </div>
    </div>
  );
};

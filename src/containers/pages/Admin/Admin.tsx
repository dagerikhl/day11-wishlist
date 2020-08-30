import React from "react";
import { useFirestore, useFirestoreCollection } from "reactfire";

import { AdminWishItem } from "../../../components/domain/AdminWishItem/AdminWishItem";
import { InternalAnchor } from "../../../components/elements/InternalAnchor/InternalAnchor";
import { Button } from "../../../components/form/Button/Button";
import { Pool } from "../../../components/layout/Pool/Pool";
import { Space } from "../../../components/layout/Space/Space";
import { FixedUseFireStoreCollection } from "../../../fixes/reactfire";
import { useStatus } from "../../../hooks/useStatus";
import { Wish } from "../../../interfaces/Wish";

import styles from "./Admin.module.css";

export const Admin: React.FC = () => {
  const wishesRef = useFirestore().collection("wishes");
  const wishesCollection = (useFirestoreCollection as FixedUseFireStoreCollection)<
    Wish
  >(wishesRef);
  const wishesDocuments = wishesCollection.docs;

  const { setError, setSuccessMessage, statusElement } = useStatus(1000);

  return (
    <>
      <Space bottom="large">
        <h1 className={styles.heading}>Admin panel</h1>
      </Space>

      {statusElement}

      <Pool>
        <div className={styles.addWishContainer}>
          <InternalAnchor to="/admin/wishes" top bottom>
            <Button>
              <i className="bx bx-plus" />
            </Button>
          </InternalAnchor>
        </div>

        {wishesDocuments.map((wishDocument) => (
          <AdminWishItem
            key={wishDocument.id}
            documentId={wishDocument.id}
            wish={wishDocument.data()}
            setSuccessMessage={setSuccessMessage}
            setError={setError}
          />
        ))}
      </Pool>
    </>
  );
};

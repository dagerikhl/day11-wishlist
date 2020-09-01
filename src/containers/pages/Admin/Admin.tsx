import React, { useContext, useState } from "react";
import { useFirestore, useFirestoreCollection } from "reactfire";

import { AdminWishItem } from "../../../components/domain/AdminWishItem/AdminWishItem";
import { InternalAnchor } from "../../../components/elements/InternalAnchor/InternalAnchor";
import { Button } from "../../../components/form/Button/Button";
import { Input } from "../../../components/form/Input/Input";
import { Pool } from "../../../components/layout/Pool/Pool";
import { Space } from "../../../components/layout/Space/Space";
import { Personalization } from "../../../contexts/Personalization";
import { FixedUseFireStoreCollection } from "../../../fixes/reactfire";
import { useStatus } from "../../../hooks/useStatus";
import { Wish } from "../../../interfaces/Wish";

import styles from "./Admin.module.css";

const download = (content: string, fileName: string, contentType: string) => {
  const a = document.createElement("a");
  const file = new Blob([content], { type: contentType });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
};

const formatIsoDate = (date: Date) =>
  `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

export const Admin: React.FC = () => {
  const { strings } = useContext(Personalization);

  const firestore = useFirestore();

  const wishesRef = firestore.collection("wishes");
  const wishesCollection = (useFirestoreCollection as FixedUseFireStoreCollection)<
    Wish
  >(wishesRef);
  const wishesDocuments = wishesCollection.docs;

  const { setError, setSuccessMessage, statusElement } = useStatus(1000);

  const [uploadedWishes, setUploadedWishes] = useState<Wish[] | undefined>();

  const handleExportWishes = () => {
    wishesRef
      .get()
      .then((result) => {
        const data = [];
        for (const doc of result.docs) {
          data.push(doc.data());
        }

        download(
          JSON.stringify(data, undefined, 2),
          `${strings.title} export - ${formatIsoDate(new Date())}.json`,
          "application/json"
        );
      })
      .catch(setError);
  };

  const handleFileUpload: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const files = event.target.files;
    if (!files) {
      return;
    }

    const file = files[0];

    const reader = new FileReader();

    reader.onload = (fileEvent) => {
      const target = fileEvent.target;
      if (!target) {
        return;
      }

      const fileContent = target.result as string;
      const fileContentAsObject = JSON.parse(fileContent);
      setUploadedWishes(fileContentAsObject);
    };
    reader.readAsText(file);
  };

  const handleImportWishes = () => {
    if (!uploadedWishes) {
      return;
    }

    const batch = firestore.batch();
    for (const wish of uploadedWishes) {
      const newWishRef = wishesRef.doc();
      batch.set(newWishRef, wish);
    }

    batch
      .commit()
      .then(() => {
        setSuccessMessage("Wishes successfully added");
      })
      .catch(setError);
  };

  return (
    <>
      <Space bottom="large">
        <h1 className={styles.heading}>Admin panel</h1>
      </Space>

      {statusElement}

      <div className={styles.actions}>
        <Button onClick={handleExportWishes} right="large" bottom>
          Export all wishes&nbsp;
          <i className="bx bx-export" />
        </Button>

        <Input type="file" onChange={handleFileUpload} right="small" bottom />

        <Button onClick={handleImportWishes} disabled={!uploadedWishes} bottom>
          Import wishes&nbsp;
          <i className="bx bx-import" />
        </Button>
      </div>

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

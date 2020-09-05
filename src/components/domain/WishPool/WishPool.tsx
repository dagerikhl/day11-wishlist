import React, { useContext } from "react";
import { useFirestore, useFirestoreCollection } from "reactfire";

import { Personalization } from "../../../contexts/Personalization";
import { FixedUseFireStoreCollection } from "../../../fixes/reactfire";
import { Wish } from "../../../interfaces/Wish";
import { WishItem } from "../WishItem/WishItem";

type Type = "aquired" | "unaquired";

interface WishPoolProps {
  type: Type;
  setSuccessMessage: (successMessage?: string) => void;
  setError: (error?: Error) => void;
}

export const WishPool: React.FC<WishPoolProps> = ({
  type,
  setSuccessMessage,
  setError,
}) => {
  const { strings } = useContext(Personalization);

  const wishesRef = useFirestore().collection("wishes");
  const wishesCollection = (useFirestoreCollection as FixedUseFireStoreCollection)<
    Wish
  >(wishesRef.where("aquired", "==", type === "aquired").orderBy("title"));
  const wishesDocuments = wishesCollection.docs;

  return (
    <>
      {wishesDocuments.length > 0
        ? wishesDocuments.map((wishDocument) => (
            <WishItem
              key={wishDocument.id}
              documentId={wishDocument.id}
              wish={wishDocument.data()}
              setSuccessMessage={setSuccessMessage}
              setError={setError}
            />
          ))
        : strings.pools[type]["no-wishes"]}
    </>
  );
};

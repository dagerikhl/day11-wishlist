import { firestore } from "firebase";
import React, { useContext } from "react";
import { useFirestore, useFirestoreCollection } from "reactfire";

import { Personalization } from "../../../contexts/Personalization";
import { FixedUseFireStoreCollection } from "../../../fixes/reactfire";
import { Wish } from "../../../interfaces/Wish";
import { WishItem } from "../WishItem/WishItem";

type Type = "aquired" | "unaquired";

const createOnTypeFilter = (type: Type) => (
  wishDocument: firestore.QueryDocumentSnapshot<Wish>
) => {
  const wish = wishDocument.data();

  return (
    (wish.aquired && type === "aquired") ||
    (!wish.aquired && type === "unaquired")
  );
};

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
  >(wishesRef);
  const wishesDocuments = wishesCollection.docs;

  const filteredWishesDocuments = wishesDocuments.filter(
    createOnTypeFilter(type)
  );

  return (
    <>
      {filteredWishesDocuments.length > 0
        ? filteredWishesDocuments.map((wishDocument) => (
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

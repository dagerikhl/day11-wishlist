import React, { useContext } from "react";
import { useFirestore, useFirestoreCollectionData } from "reactfire";

import { WishItem } from "../WishItem/WishItem";
import { Personalization } from "../../contexts/Personalization";
import { Wish } from "../../interfaces/Wish";

type Type = "aquired" | "unaquired";

interface WishPoolProps {
  type: Type;
}

export const WishPool: React.FC<WishPoolProps> = ({ type }) => {
  const { strings } = useContext(Personalization);

  const wishesRef = useFirestore().collection("wishes");
  let wishes = useFirestoreCollectionData<Wish>(wishesRef);

  if (type === "aquired") {
    wishes = wishes.filter(({ aquired }) => !!aquired);
  } else if (type === "unaquired") {
    wishes = wishes.filter(({ aquired }) => !aquired);
  }

  return (
    <>
      {wishes && wishes.length > 0
        ? wishes.map((wish) => <WishItem key={wish.title} wish={wish} />)
        : strings.pools[type]["no-wishes"]}
    </>
  );
};

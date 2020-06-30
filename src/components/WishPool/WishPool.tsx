import React, { useContext } from "react";

import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { Loader } from "../Loader/Loader";
import { Pool } from "../Pool/Pool";
import { WishItem } from "../WishItem/WishItem";
import { Personalization } from "../../contexts/Personalization";
import { Wish } from "../../interfaces/Wish";

type Type = "aquired" | "unaquired";

interface WishPoolProps {
  type: Type;
  title?: string;
  error?: Error;
  isLoading: boolean;
  wishes?: Wish[];
}

export const WishPool: React.FC<WishPoolProps> = ({
  type,
  title,
  error,
  isLoading,
  wishes,
}) => {
  const { strings } = useContext(Personalization);

  return (
    <Pool title={title}>
      {error ? (
        <ErrorMessage error={error} />
      ) : isLoading ? (
        <Loader />
      ) : wishes && wishes.length > 0 ? (
        wishes.map((wish) => <WishItem key={wish.title} wish={wish} />)
      ) : (
        strings.pools[type]["no-wishes"]
      )}
    </Pool>
  );
};

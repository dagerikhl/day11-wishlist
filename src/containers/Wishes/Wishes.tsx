import React, { useContext } from "react";

import { WishPool } from "../../components/WishPool/WishPool";
import { Personalization } from "../../contexts/Personalization";
import { useApi } from "../../hooks/useApi";
import { Wish } from "../../interfaces/Wish";

export const Wishes = () => {
  const { strings } = useContext(Personalization);

  // TODO Implement and get this from a real back-end database
  const { error, isLoading, response: wishes } = useApi<Wish[]>(
    "/dummy-data.json"
  );

  return (
    <>
      <WishPool
        type="unaquired"
        error={error}
        isLoading={isLoading}
        wishes={wishes && wishes.filter((wish) => !wish.aquired)}
      />

      <WishPool
        type="aquired"
        title={strings.pools.aquired.title}
        error={error}
        isLoading={isLoading}
        wishes={wishes && wishes.filter((wish) => wish.aquired)}
      />
    </>
  );
};

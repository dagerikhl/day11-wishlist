import React from "react";

import { WishPool } from "../../components/WishPool/WishPool";
import { useApi } from "../../hooks/useApi";
import { Wish } from "../../interfaces/Wish";

export const Wishes = () => {
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
        error={error}
        isLoading={isLoading}
        wishes={wishes && wishes.filter((wish) => wish.aquired)}
      />
    </>
  );
};

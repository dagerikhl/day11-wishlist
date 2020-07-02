import React, { useContext } from "react";
import { SuspenseWithPerf } from "reactfire";

import { Loader } from "../../components/Loader/Loader";
import { Pool } from "../../components/Pool/Pool";
import { WishPool } from "../../components/WishPool/WishPool";
import { Personalization } from "../../contexts/Personalization";

export const Wishes = () => {
  const { strings } = useContext(Personalization);

  return (
    <>
      <Pool>
        <SuspenseWithPerf fallback={<Loader />} traceId="load-unaquired-wishes">
          <WishPool type="unaquired" />
        </SuspenseWithPerf>
      </Pool>

      <Pool title={strings.pools.aquired.title}>
        <SuspenseWithPerf fallback={<Loader />} traceId="load-aquired-wishes">
          <WishPool type="aquired" />
        </SuspenseWithPerf>
      </Pool>
    </>
  );
};

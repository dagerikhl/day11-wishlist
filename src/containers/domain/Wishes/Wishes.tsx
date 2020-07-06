import React, { useContext } from "react";

import { Pool } from "../../../components/layout/Pool/Pool";
import { WishPool } from "../../../components/domain/WishPool/WishPool";
import { Suspended } from "../../../components/suspense/Suspended/Suspended";
import { Personalization } from "../../../contexts/Personalization";

export const Wishes: React.FC = () => {
  const { strings } = useContext(Personalization);

  return (
    <>
      <Pool>
        <Suspended traceId="load-unaquired-wishes">
          <WishPool type="unaquired" />
        </Suspended>
      </Pool>

      <Pool title={strings.pools.aquired.title}>
        <Suspended traceId="load-aquired-wishes">
          <WishPool type="aquired" />
        </Suspended>
      </Pool>
    </>
  );
};

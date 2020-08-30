import React, { useContext } from "react";

import { Pool } from "../../../components/layout/Pool/Pool";
import { WishPool } from "../../../components/domain/WishPool/WishPool";
import { Suspended } from "../../../components/suspense/Suspended/Suspended";
import { Personalization } from "../../../contexts/Personalization";
import { useStatus } from "../../../hooks/useStatus";

export const Wishes: React.FC = () => {
  const { strings } = useContext(Personalization);

  const { setError, setSuccessMessage, statusElement } = useStatus(5000);

  return (
    <>
      {statusElement}

      <Pool>
        <Suspended traceId="load-unaquired-wishes">
          <WishPool
            type="unaquired"
            setSuccessMessage={setSuccessMessage}
            setError={setError}
          />
        </Suspended>
      </Pool>

      <Pool title={strings.pools.aquired.title}>
        <Suspended traceId="load-aquired-wishes">
          <WishPool
            type="aquired"
            setSuccessMessage={setSuccessMessage}
            setError={setError}
          />
        </Suspended>
      </Pool>
    </>
  );
};

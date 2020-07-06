import React, { Suspense } from "react";
import { SuspenseWithPerf } from "reactfire";

import { Loader } from "../../status/Loader/Loader";

interface Props {
  fallback?: React.ReactNode;
  traceId?: string;
}

export const Suspended: React.FC<Props> = ({ fallback, traceId, children }) => {
  const loader = fallback || <Loader />;

  return traceId ? (
    <SuspenseWithPerf fallback={loader} traceId={traceId}>
      {children}
    </SuspenseWithPerf>
  ) : (
    <Suspense fallback={loader}>{children}</Suspense>
  );
};

import { firestore } from "firebase";
import { ReactFireOptions } from "reactfire";

export type FixedUseFireStoreCollection = <T = { [key: string]: unknown }>(
  query: firestore.Query,
  options?: ReactFireOptions<T[]>
) => firestore.QuerySnapshot<T>;

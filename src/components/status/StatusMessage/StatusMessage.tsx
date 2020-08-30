import cz from "classnames";
import React from "react";

import styles from "./StatusMessage.module.css";

type StatusType = "success" | "error";

interface Props {
  type: StatusType;
  message?: React.ReactNode;
}

export const StatusMessage: React.FC<Props> = ({ type, message }) => {
  if (!message) {
    return null;
  }

  return (
    <div
      className={cz(styles.statusMessage, {
        [styles.success]: type === "success",
        [styles.error]: type === "error",
      })}
    >
      {message}
    </div>
  );
};

import React from "react";

import styles from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  error: Error;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => (
  <div className={styles.error}>{error.message}</div>
);

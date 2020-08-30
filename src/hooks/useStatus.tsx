import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { Space } from "../components/layout/Space/Space";
import { StatusMessage } from "../components/status/StatusMessage/StatusMessage";

import styles from "./useStatus.module.css";

interface UseStatusResult {
  setSuccessMessage: (message?: string) => void;
  setError: (error?: Error) => void;
  resetStatus: () => void;
  statusElement: React.ReactNode;
}

type UseStatus = (
  clearAfter?: number,
  navigateAfter?: number,
  navigationPath?: string
) => UseStatusResult;

export const useStatus: UseStatus = (
  clearAfter,
  navigateAfter,
  navigationPath
) => {
  const history = useHistory();

  const [successMessage, setSuccessMessage] = useState<string | undefined>();
  const [error, setError] = useState<Error | undefined>();

  const resetStatus = () => {
    setSuccessMessage(undefined);
    setError(undefined);
  };

  const statusElement = (
    <Space className={styles.messageContainer} bottom>
      <StatusMessage type="success" message={successMessage} />
      <StatusMessage type="error" message={error?.message} />
    </Space>
  );

  useEffect(() => {
    if (clearAfter === undefined) {
      return;
    }

    let timeoutId: number;
    if (successMessage) {
      timeoutId = window.setTimeout(() => {
        resetStatus();
      }, clearAfter);
    }

    return () => {
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [clearAfter, history, successMessage]);

  useEffect(() => {
    if (navigateAfter === undefined || navigationPath === undefined) {
      return;
    }

    let timeoutId: number;
    if (successMessage) {
      timeoutId = window.setTimeout(() => {
        history.push(navigationPath);
      }, navigateAfter);
    }

    return () => {
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [history, navigateAfter, navigationPath, successMessage]);

  return {
    setSuccessMessage,
    setError,
    resetStatus,
    statusElement,
  };
};

import React from "react";

import { Space } from "../../../components/layout/Space/Space";
import { Suspended } from "../../../components/suspense/Suspended/Suspended";
import { useStatus } from "../../../hooks/useStatus";
import { LoginForm } from "./LoginForm";

import styles from "./Login.module.css";

export const Login: React.FC = () => {
  const { resetStatus, setError, setSuccessMessage, statusElement } = useStatus(
    undefined,
    1000,
    "/admin"
  );

  return (
    <>
      <Space bottom="large">
        <h1 className={styles.heading}>Admin login</h1>
      </Space>

      {statusElement}

      <Suspended traceId="login-form">
        <LoginForm
          resetStatus={resetStatus}
          setSuccessMessage={setSuccessMessage}
          setError={setError}
        />
      </Suspended>
    </>
  );
};

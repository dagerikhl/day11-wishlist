import React, { useState } from "react";

import { Space } from "../../../components/layout/Space/Space";
import { StatusMessage } from "../../../components/status/StatusMessage/StatusMessage";
import { Suspended } from "../../../components/suspense/Suspended/Suspended";
import { LoginForm } from "./LoginForm";

import styles from "./Login.module.css";

export const Login: React.FC = () => {
  const [successMessage, setSuccessMessage] = useState<string | undefined>();
  const [error, setError] = useState<Error | undefined>();

  return (
    <>
      <Space bottom="large">
        <h1 className={styles.heading}>Admin login</h1>
      </Space>

      <Space className={styles.messageContainer} bottom>
        <StatusMessage type="success" message={successMessage} />
        <StatusMessage type="error" message={error?.message} />
      </Space>

      <Suspended traceId="login-form">
        <LoginForm setSuccessMessage={setSuccessMessage} setError={setError} />
      </Suspended>
    </>
  );
};

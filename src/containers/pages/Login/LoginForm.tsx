import React, { FormEvent, useState } from "react";
import { useAuth } from "reactfire";

import { Button } from "../../../components/form/Button/Button";
import { Input } from "../../../components/form/Input/Input";
import { Space } from "../../../components/layout/Space/Space";

import styles from "./LoginForm.module.css";

interface LoginFormProps {
  resetStatus: () => void;
  setSuccessMessage: (successMessage?: string) => void;
  setError: (error?: Error) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  resetStatus,
  setSuccessMessage,
  setError,
}) => {
  const auth = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    resetStatus();

    setEmail(event.target.value);
  };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    resetStatus();

    setPassword(event.target.value);
  };

  const handleFormSubmit: React.EventHandler<FormEvent> = (event) => {
    event.preventDefault();
  };

  const handleSubmit: React.MouseEventHandler = () => {
    resetStatus();

    auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        setSuccessMessage(`Succesfully logged in as ${user?.email}.`);
      })
      .catch(setError);
  };

  return (
    <form className={styles.form} onClick={handleFormSubmit}>
      <Space bottom="large">
        <Space bottom="small">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </Space>
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </Space>

      <Button type="submit" onClick={handleSubmit}>
        Login
      </Button>
    </form>
  );
};

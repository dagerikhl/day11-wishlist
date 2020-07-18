import React, { FormEvent, useState } from "react";
import { useAuth } from "reactfire";

import { Button } from "../../../components/form/Button/Button";
import { Input } from "../../../components/form/Input/Input";
import { Space } from "../../../components/layout/Space/Space";

import styles from "./LoginForm.module.css";

interface Props {
  setSuccessMessage: (successMessage?: string) => void;
  setError: (error?: Error) => void;
}

// TODO Style form elements like button and input (for all places)

export const LoginForm: React.FC<Props> = ({ setSuccessMessage, setError }) => {
  const auth = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setError();
    setEmail(event.target.value);
  };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setError();
    setPassword(event.target.value);
  };

  const handleFormSubmit: React.EventHandler<FormEvent> = (event) => {
    event.preventDefault();
  };

  const handleSubmit: React.MouseEventHandler = () => {
    setSuccessMessage();
    setError();

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

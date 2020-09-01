import React from "react";

import { Button } from "../../form/Button/Button";

import styles from "./ConfirmPrompt.module.css";

interface ConfirmPromptProps {
  title: string;
  message: string;
  onClose: () => void;
  confirmLabel: string;
  declineLabel: string;
  onConfirm: () => void;
}

export const ConfirmPrompt: React.FC<ConfirmPromptProps> = ({
  title,
  message,
  onClose,
  confirmLabel,
  declineLabel,
  onConfirm,
}) => {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <div className={styles.container}>
      <h1>{title}</h1>

      <p>{message}</p>

      <div className={styles.actions}>
        <Button onClick={handleConfirm}>{confirmLabel}</Button>
        <Button onClick={onClose}>{declineLabel}</Button>
      </div>
    </div>
  );
};

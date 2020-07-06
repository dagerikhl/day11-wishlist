import { User } from "firebase";
import React from "react";
import { useAuth, useUser } from "reactfire";

import { Space } from "../../../components/layout/Space/Space";

import styles from "./LoginStatus.module.css";

const LoginStatus: React.FC = () => {
  const auth = useAuth();
  const user = useUser<User>();

  if (!user) {
    return null;
  }

  const handleLogout: React.MouseEventHandler = () => {
    auth.signOut();
  };

  return (
    <div className={styles.container}>
      Logged in as: {user.email}
      <Space left>
        <button onClick={handleLogout}>Logout</button>
      </Space>
    </div>
  );
};

export default LoginStatus;

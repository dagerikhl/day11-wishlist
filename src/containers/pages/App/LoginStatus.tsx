import { User } from "firebase";
import React from "react";
import { useAuth, useUser } from "reactfire";

import { InternalAnchor } from "../../../components/elements/InternalAnchor/InternalAnchor";
import { Button } from "../../../components/form/Button/Button";
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
        <InternalAnchor to="/admin">Admin</InternalAnchor>
      </Space>
      <Space left>
        <Button onClick={handleLogout}>
          <i className="bx bx-log-out-circle" />
          &nbsp;Logout
        </Button>
      </Space>
    </div>
  );
};

export default LoginStatus;

import React from "react";
import { Link } from "react-router-dom";
import { Space } from "../../layout/Space/Space";

import styles from "./Unauthenticated.module.css";

export const UnauthenticatedMessage: React.FC = () => (
  <>
    <Space bottom="large">
      <h1 className={styles.title}>User not authenticated</h1>
    </Space>

    <div className={styles.lead}>
      <p>If you aren't already logged in, you probably shouldn't be here.</p>

      <p>
        <i className="bx bx-shield-alt-2" />
        &nbsp;
        <em>You must gather your Dag Erik before venturing forth.</em>
        &nbsp;
        <i className="bx bx-shield-alt-2" />
      </p>

      <Link to="/login">Go to login page</Link>
    </div>
  </>
);

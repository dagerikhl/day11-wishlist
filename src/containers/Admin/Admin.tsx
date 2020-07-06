import React from "react";

import { Space } from "../../components/Space/Space";

import styles from "./Admin.module.css";

export const Admin: React.FC = () => {
  return (
    <>
      <Space bottom="large">
        <h1 className={styles.heading}>Admin panel</h1>
      </Space>

      <div>TODO Admin content</div>
    </>
  );
};

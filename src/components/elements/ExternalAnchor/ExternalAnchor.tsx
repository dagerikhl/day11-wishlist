import cz from "classnames";
import React from "react";

import { Space } from "../../layout/Space/Space";

import styles from "./ExternalAnchor.module.css";

interface Props {
  href: string;
  title?: string;
}

export const ExternalAnchor: React.FC<Props> = ({ href, title }) => {
  const onClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <a
      className={cz("day11-anchor", styles.externalAnchor)}
      href={href}
      title={title}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
    >
      <span className="day11-anchor-text">{href}</span>
      <Space left="x-small">
        <i className="bx bx-link-external" />
      </Space>
    </a>
  );
};

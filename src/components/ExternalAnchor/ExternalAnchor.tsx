import React from "react";
import { cz } from "../../helpers/cz";

import styles from "./ExternalAnchor.module.css";

interface ExternalAnchorProps {
  href: string;
  title?: string;
}

export const ExternalAnchor: React.FC<ExternalAnchorProps> = ({ href, title }) => {
  const onClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <a
      className={styles.anchor}
      href={href}
      title={title}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
    >
      <span>{href}</span>
      <i className={cz(styles.icon, "bx", "bx-link-external")} />
    </a>
  );
};

import React from "react";

import styles from "./ExternalAnchor.module.css";

interface ExternalAnchorProps {
  href: string;
  title?: string;
}

const ExternalAnchor: React.FC<ExternalAnchorProps> = ({ href, title }) => (
  <a
    className={styles.anchor}
    href={href}
    title={title}
    target="_blank"
    rel="noopener noreferrer"
  >
    {href}
    <span className={styles.icon}>{">"}</span>
  </a>
);

export default ExternalAnchor;

import React from "react";
import { cz } from "../../helpers/cz";

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
    <span>{href}</span>
    <i className={cz(styles.icon, "bx", "bx-link-external")} />
  </a>
);

export default ExternalAnchor;

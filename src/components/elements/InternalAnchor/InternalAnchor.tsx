import React from "react";
import { Link } from "react-router-dom";

import { Space } from "../../layout/Space/Space";

interface Props {
  to: string;
  title?: string;
}

export const InternalAnchor: React.FC<Props> = ({ to, title, children }) => (
  <Link className="day11-anchor" to={to} title={title}>
    <span className="day11-anchor-text">{children}</span>
    <Space left="x-small">
      <i className="bx bx-chevron-right" />
    </Space>
  </Link>
);

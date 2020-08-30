import React from "react";
import { Link } from "react-router-dom";

import { Space, SpaceProps } from "../../layout/Space/Space";

interface Props {
  to: string;
  title?: string;
}

type InternalAnchorProps = Props & SpaceProps;

export const InternalAnchor: React.FC<InternalAnchorProps> = ({
  to,
  title,
  children,
  ...rest
}) => (
  <Space {...rest}>
    <Link className="day11-anchor" to={to} title={title}>
      {typeof children === "string" ? (
        <>
          <span className="day11-anchor-text">{children}</span>
          <Space left="x-small">
            <i className="bx bx-chevron-right" />
          </Space>
        </>
      ) : (
        children
      )}
    </Link>
  </Space>
);

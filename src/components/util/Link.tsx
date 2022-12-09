import React, { ReactNode } from 'react';
import { Link as GatsbyLink } from 'gatsby';

interface LinkProps {
  to?: string;
  children: ReactNode;
  className?: string;
  activeClassName?: string;
  disabledClassName?: string;
}

const Link: React.FC<LinkProps> = ({ to, children, className, activeClassName, disabledClassName }) => {
  const internalRegex = /^(\/\w+)+\/?\??[\w\&\-\#\=]*$/gm;
  const isActive = !!to;
  const isInternal = !!to && internalRegex.test(to);

  const fullClassName = isActive
    ? `${className ?? ''} ${activeClassName ?? ''}`
    : `${className ?? ''} ${disabledClassName ?? ''}`;

  return (
    <div className={fullClassName}>
      {isInternal ? <GatsbyLink to={to}>{children}</GatsbyLink> : <a href={to}>{children}</a>}
    </div>
  );
};

export default Link;

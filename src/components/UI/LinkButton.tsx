interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
}

import Link, { LinkProps } from 'next/link';
import React from 'react';

const LinkButton: React.FC<LinkProps & LinkButtonProps> = ({
  children,
  href,
  ...props
}) => {
  return (
    <Link
      href={href}
      className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
      {...props}
      replace
    >
      {children}
    </Link>
  );
};

export default LinkButton;

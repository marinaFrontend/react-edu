import React from 'react';
import './Navigation.scss';

export type NavigationItem = {
  value: string;
  text: string;
  href: string;
};

interface NavigationProps {
  items: NavigationItem[];
}

export const Navigation = ({items}: NavigationProps) => {
  return (
    <div className="d-flex">
      {items.map(({value, text, href}) => (
        <a key={value} href={href} className="d-block flex-grow-1 text-decoration-none">
          {text}
        </a>
      ))}
    </div>
  );
};

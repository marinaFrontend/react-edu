import React from 'react';

export interface CardProps {
  id: number | string;
  imgSrc?: string;
  children?: React.ReactNode;
}

export const Card = ({imgSrc, children}: CardProps) => (
  <div className="card">
    {imgSrc && <img src={imgSrc} className="card-img-top" alt="image-card" />}
    <div className="card-body">{children}</div>
  </div>
);

import React from 'react';
import './Banner.scss';

interface BannerProps {
  href: string;
  imgUrl: string;
}

export const Banner = ({href, imgUrl}: BannerProps) => (
  <a href={href} className="banner card" style={{backgroundImage: `url("${imgUrl}")`}} />
);

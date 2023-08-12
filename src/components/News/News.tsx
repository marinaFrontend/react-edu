import React from 'react';
import './News.scss';

export type actionButtonType = {
  text: string;
  href: string;
};

export interface NewsProps {
  title: string;
  href?: string;
  imgSrc?: string;
  date?: string;
  actionButton?: actionButtonType;
  children?: React.ReactNode;
}

export const News = ({title, href, imgSrc, date, actionButton, children}: NewsProps) => (
  <div className="news card">
    {href && <a href={href} className="stretched-link" />}
    {imgSrc && <img src={imgSrc} className="card-img-top news-image" alt="news-image" />}
    <div className="card-body">
      <div className="d-flex align-items-center mb-3">
        <h5>{title}</h5>
        {date && <span className="ms-3 text-secondary">{date}</span>}
        {actionButton && (
          <a href={actionButton.href} className="ms-2 btn btn-primary btn-sm">
            {actionButton.text}
          </a>
        )}
      </div>
      <div className="card-content news-list">{children}</div>
    </div>
  </div>
);

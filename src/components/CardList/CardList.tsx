import React from 'react';
import {Card} from '../Card/Card';

type CardListProps = {
  id: number | string;
  title: string;
  text: string;
  href: string;
  imgSrc?: string;
};

export const CardList: React.FC<{items: CardListProps[]}> = ({items}) => {
  const list = items.map(({id, title, text, href, imgSrc}) => (
    <div key={id} className="col-12 col-md-3">
      <Card id={id} imgSrc={imgSrc}>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href={href} className="btn btn-primary">
          Go somewhere
        </a>
      </Card>
    </div>
  ));

  return <div className="row align-items-end">{list}</div>;
};

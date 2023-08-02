import React from 'react';
import {Product} from '../../models/product';

interface ListingProps {
  items: Product[];
}

export const Listing = ({items}: ListingProps) => {
  const productsList = items
    .filter((item) => item.state === 'active')
    .map((item) => (
      <div key={item.listing_id} className="item">
        <div className="item-image">
          <a href={item.url}>
            <img
              src={item.MainImage ? item.MainImage.url_570xN : 'https://placekitten.com/640/360'}
              alt={item.title}
            />
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{item.title}</p>
          <p className="item-price">
            <span>{item.currency_code} </span>
            <span>{item.price}</span>
          </p>
          <p className="item-quantity level-medium">{item.quantity} left</p>
        </div>
      </div>
    ));

  return <div className="item-list">{productsList}</div>;
};

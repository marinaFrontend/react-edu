import React from 'react';
import {Product} from '../../models/product';
import {cropString} from '../../helpers/utils';

interface ListingProps {
  items: Product[];
}

const getPrice = (currencyCode: string | undefined, price: string | undefined) => {
  switch (currencyCode) {
    case 'USD':
      return `$${price}`;
    case 'EUR':
      return `€${price}`;
    default:
      return `${price} ${currencyCode}`;
  }
};

const getQuantityColor = (quantity: number | undefined) => {
  if (!quantity) return 'low';
  return quantity < 11 ? 'low' : quantity < 21 ? 'medium' : 'high';
};

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
          <p className="item-title">{cropString(item.title, 50)}</p>
          <p className="item-price">{getPrice(item.currency_code, item.price)}</p>
          <p className={`item-quantity level-${getQuantityColor(item.quantity)}`}>
            {item.quantity} left
          </p>
        </div>
      </div>
    ));

  return <div className="item-list">{productsList}</div>;
};

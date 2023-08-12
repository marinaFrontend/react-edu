import React from 'react';

export type StockMarketItem = {
  currency: string;
  value: number;
  diffValue: string;
};

interface StockMarketProps {
  items: StockMarketItem[];
}

export const StockMarket = ({items}: StockMarketProps) => {
  const currencyList = items.map(({currency, value, diffValue}) => (
    <div key={currency} className="me-4">
      <span className="text-uppercase me-2">
        <strong>{currency}</strong>
      </span>
      <span className="me-2">{value}</span>
      <span className="text-secondary">{diffValue}</span>
    </div>
  ));

  return <div className="d-flex">{currencyList}</div>;
};

import React from 'react';
import products from './data/etsy.json';
import {Listing} from './components/Listing/Listing';

import './App.css';

function App() {
  return (
    <div className="container">
      <Listing items={products} />
    </div>
  );
}

export default App;

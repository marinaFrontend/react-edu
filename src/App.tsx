import React from 'react';
import {CardList} from './components/CardList/CardList';
import catsData from './data/cats.json';
import './App.css';

function App() {
  return (
    <div className="container py-5">
      <CardList items={catsData} />
    </div>
  );
}

export default App;

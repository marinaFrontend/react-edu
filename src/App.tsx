import React from 'react';
import {Stars} from './components/Stars/Stars';

import './App.css';

function App() {
  return (
    <div className="container">
      <Stars count={5} />
    </div>
  );
}

export default App;

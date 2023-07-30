import {useState} from 'react';
import products from '../../mockup/products.json';
import './Store.css';

import IconSwitch from '../IconSwitch/IconSwitch';
import ListView from '../ListView/ListView';

const Store = () => {
  const initialState = {icon: 'view_module', products};
  const [state, setState] = useState(initialState);

  const handleChangeView = () => {
    setState({
      ...state,
      icon: '',
    });
  };

  return (
    <div className="store">
      <div className="store-header">
        <IconSwitch icon={state.icon} onSwitch={handleChangeView} />
      </div>
      <div className="store-list">
        <ListView items={state.products} />
      </div>
    </div>
  );
};

export default Store;

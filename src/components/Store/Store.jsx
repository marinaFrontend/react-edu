import {useState} from 'react';
import products from '../../mockup/products.json';

import IconSwitch from '../IconSwitch/IconSwitch';
import ListView from '../ListView/ListView';
import CardsView from '../CardsView/CardsView';

const Store = () => {
  const initialState = {icon: 'view_module', products};
  const [state, setState] = useState(initialState);

  const handleChangeView = () => {
    setState({
      ...state,
      icon: `view_${state.icon === 'view_module' ? 'list' : 'module'}`,
    });
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-end py-4">
        <IconSwitch icon={state.icon} onSwitch={handleChangeView} />
      </div>
      {state.icon === 'view_module' ? (
        <CardsView items={state.products} />
      ) : (
        <ListView items={state.products} />
      )}
    </>
  );
};

export default Store;

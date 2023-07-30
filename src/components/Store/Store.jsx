import {useState} from 'react';
//import products from '../../mockup/products.json';
import IconSwitch from '../IconSwitch/IconSwitch';


const Store = () => {
  const initialState = { post: 1, likes: 0 };
  const [state, setState] = useState(initialState);

  return (
      <div>
        <IconSwitch
          icon={"view_list"}
          onSwitch={() => console.log("change state here")}
        />
      </div>
  );
};

export default Store;

import PropTypes from 'prop-types';
import ShopItem from './ShopItem/ShopItem';

import './ListView.css';

const propTypes = {
  items: PropTypes.array,
};

const defaultProps = {
  items: [],
};

const ListView = ({items}) => {
  return (
    <div className="list-view">
      {items.map((item, id) => (
        <ShopItem key={id} item={item} />
      ))}
    </div>
  );
};

ListView.propTypes = propTypes;
ListView.defaultProps = defaultProps;

export default ListView;

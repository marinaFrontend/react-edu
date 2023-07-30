import PropTypes from 'prop-types';
import ShopItem from './ShopItem/ShopItem';

const propTypes = {
  items: PropTypes.array,
};

const defaultProps = {
  items: [],
};

const ListView = ({items}) => {
  return (
    <div className="row">
      {items.map((item, index) => (
        <div key={index} className="col-12">
          <ShopItem item={item} />
        </div>
      ))}
    </div>
  );
};

ListView.propTypes = propTypes;
ListView.defaultProps = defaultProps;

export default ListView;

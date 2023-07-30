import PropTypes from 'prop-types';
import ShopCard from './ShopCard/ShopCard';

const propTypes = {
  items: PropTypes.array,
};

const defaultProps = {
  items: [],
};

const CardsView = ({items}) => {
  return (
    <div className="row">
      {items.map((item, index) => (
        <div key={index} className="col-4">
          <ShopCard item={item} />
        </div>
      ))}
    </div>
  );
};

CardsView.propTypes = propTypes;
CardsView.defaultProps = defaultProps;

export default CardsView;

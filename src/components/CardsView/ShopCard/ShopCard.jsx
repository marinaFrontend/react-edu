import PropTypes from 'prop-types';
import './ShopCard.css';

const propTypes = {
  item: PropTypes.object,
};

const defaultProps = {
  item: {
    name: '',
    price: '',
    color: '',
    img: '',
  },
};

const ShopCard = ({item}) => {
  return (
    <div className="shop-card text-center my-2 p-4">
      <h4 className="shop-card-title">{item.name}</h4>
      <div className="shop-card-color mt-1">{item.color}</div>
      <img src={item.img} alt={item.name} className="shop-card-img" />
      <div className="d-flex align-cards-center">
        <h5 className="shop-card-price text-danger">${item.price}</h5>
        <button type="button" className="ms-auto shop-card-button">
          Add to cart
        </button>
      </div>
    </div>
  );
};

ShopCard.propTypes = propTypes;
ShopCard.defaultProps = defaultProps;

export default ShopCard;

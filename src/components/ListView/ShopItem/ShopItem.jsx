import PropTypes from 'prop-types';
import './ShopItem.css';

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

const ShopItem = ({item}) => {
  return (
    <div className="shop-item d-flex align-items-center justify-content-between my-1 py-1 px-3">
      <img src={item.img} alt={item.name} className="shop-item-img" />
      <h5 className="shop-item-title">{item.name}</h5>
      <div className="shop-item-color mt-1">{item.color}</div>
      <h5 className="shop-item-price text-danger">${item.price}</h5>
      <button type="button" className="shop-item-button">
        Add to cart
      </button>
    </div>
  );
};

ShopItem.propTypes = propTypes;
ShopItem.defaultProps = defaultProps;

export default ShopItem;

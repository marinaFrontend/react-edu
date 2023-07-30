import PropTypes from 'prop-types';

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
    <div>
      <div>{item.name}</div>
      <div>{item.color}</div>
      <figure>
        <img src={item.img} alt={item.name} />
      </figure>
      <div>
        <div>{item.price}</div>
        <button type="button">Add to cart</button>
      </div>
    </div>
  );
};

ShopItem.propTypes = propTypes;
ShopItem.defaultProps = defaultProps;

export default ShopItem;

import PropTypes from 'prop-types';

const propTypes = {
  brand: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  descriptionFull: PropTypes.string,
  price: PropTypes.number.isRequired,
  currency: PropTypes.string
};

const defaultProps = {
  brand: '',
  title: '',
  description: '',
  descriptionFull: '',
  price: 0,
  currency: '£'
};

const ShopItemFunc = ({item}) => {
  return (
      <div className="main-content">
        <h2>{item.brand}</h2>
        <h1>{item.title}</h1>
        <h3>{item.description}</h3>
        <div className="description">{item.descriptionFull}</div>
        <div className="highlight-window mobile">
          <div className="highlight-overlay"/>
        </div>
        <div className="divider"/>
        <div className="purchase-info">
          <div className="price">{item.currency}{item.price}</div>
          <button>Добавить в корзину</button>
        </div>
      </div>
  );
};

ShopItemFunc.propTypes = propTypes;
ShopItemFunc.defaultProps = defaultProps;

export default ShopItemFunc;
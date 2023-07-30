import PropTypes from 'prop-types';

const propTypes = {
  items: PropTypes.array,
};

const defaultProps = {
  items: [],
};

const CardsView = ({items}) => {
  return <div>{items}</div>;
};

CardsView.propTypes = propTypes;
CardsView.defaultProps = defaultProps;

export default CardsView;

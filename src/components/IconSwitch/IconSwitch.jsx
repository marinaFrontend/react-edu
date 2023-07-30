import PropTypes from 'prop-types';

const propTypes = {
  icon: PropTypes.string,
  onSwitch: PropTypes.func,
};

const defaultProps = {
  icon: 'view_module',
};

const IconSwitch = ({icon, onSwitch}) => {
  return (
      <div>IconSwitch</div>
  );
};

IconSwitch.propTypes = propTypes;
IconSwitch.defaultProps = defaultProps;

export default IconSwitch;
import PropTypes from 'prop-types';
import './IconSwitch.css';

const propTypes = {
  icon: PropTypes.string,
  onSwitch: PropTypes.func,
};

const defaultProps = {
  icon: 'view_module',
};

const IconSwitch = ({icon, onSwitch}) => {
  return (
    <button
      className="icon-switch d-inline-flex align-items-center justify-content-center"
      type="button"
      onClick={onSwitch}
    >
      <i className="material-icons">{icon}</i>
    </button>
  );
};

IconSwitch.propTypes = propTypes;
IconSwitch.defaultProps = defaultProps;

export default IconSwitch;

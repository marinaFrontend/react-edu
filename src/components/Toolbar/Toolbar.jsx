import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Toolbar.css';

const propTypes = {
  filters: PropTypes.array,
  selected: PropTypes.string,
  onSelectFilter: PropTypes.func,
};

const defaultProps = {
  filters: [],
  selected: 'All',
};

class Toolbar extends Component {
  render() {
    const {filters, selected, onSelectFilter} = this.props;

    const ToolbarItems = filters.map((filter) => (
      <button
        key={filter}
        type="button"
        className={`toolbar-item ${selected === filter ? 'active' : ''}`}
        onClick={() => onSelectFilter(filter)}
      >
        {filter}
      </button>
    ));

    return <div className="toolbar">{ToolbarItems}</div>;
  }
}

Toolbar.propTypes = propTypes;
Toolbar.defaultProps = defaultProps;

export default Toolbar;

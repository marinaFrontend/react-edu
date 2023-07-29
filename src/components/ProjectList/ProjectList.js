import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './ProjectList.css';

const propTypes = {
  projects: PropTypes.array,
};

const defaultProps = {
  projects: [],
};

class ProjectList extends Component {
  render() {
    const {projects} = this.props;

    const ProjectListItems = projects.map((project, index) =>
      <div
        key={index}
        className="project-list-item"
      >
        <img
          src={project.img}
          alt={project.category}
        />
      </div>
    )

    return (
      <div className="project-list">{ProjectListItems}</div>
    );
  }
}

ProjectList.propTypes = propTypes;
ProjectList.defaultProps = defaultProps;

export default ProjectList;

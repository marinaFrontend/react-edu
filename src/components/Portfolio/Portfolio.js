import React, {Component} from 'react';
import Toolbar from '../Toolbar/Toolbar';
import ProjectList from '../ProjectList/ProjectList';
import projectsData from '../../mockup/projects.json';

const filterData = ['All', 'Websites', 'Flayers', 'Business Cards'];


class Portfolio extends Component {
  state = {selected: 'All'};

  handleSelectFilter = (filter) => {
    this.setState({selected: filter});
  };

  filterProjects = (projects, selectedCategory) => {
    if (selectedCategory === 'All') return projects;
    return projects.filter(project => project.category === selectedCategory);
  }

  render() {
    const filteredProjects = this.filterProjects(projectsData, this.state.selected);

    return (
      <>
        <Toolbar
          filters={filterData}
          selected={this.state.selected}
          onSelectFilter={this.handleSelectFilter}/>
        <ProjectList
          projects={filteredProjects}
        />
      </>
    );
  }
}

export default Portfolio;

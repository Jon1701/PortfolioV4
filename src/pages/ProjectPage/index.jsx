import React from 'react';
import PropTypes from 'prop-types';

const ProjectPage = ({ match }) => {
  return <div>{match.params.projectId}</div>;
};

ProjectPage.propTypes = {
  match: PropTypes.string.isRequired,
};

export default ProjectPage;

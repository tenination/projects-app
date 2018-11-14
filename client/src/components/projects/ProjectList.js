import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({ projects }) => {
  console.log('projects are:', projects);
  return (
    <div className="project-list section">
      {projects &&
        projects.map(project => {
          return <ProjectSummary key={project.id} project={project} />;
        })}
    </div>
  );
};

export default ProjectList;

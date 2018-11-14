import React from 'react';

const ProjectDetails = props => {
  const id = props.match.params.id;
  console.log('project details props are:', props);
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title {id}</span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic a non
            commodi illum consectetur nesciunt, neque, nostrum vitae delectus
            perferendis quidem pariatur autem, totam vero et quos ullam ipsa ab.
          </p>
        </div>
        <div className="card-action lighten-4 grey-text">
          <div>
            Posted by Tim
            <div>27 October</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

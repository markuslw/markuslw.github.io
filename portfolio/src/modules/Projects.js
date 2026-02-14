import React from 'react';

const Projects = ({ title, date, description }) => {
  return (
    <div>
      <div className="table">
        <h3 className="organization">{title}</h3>
        <h3 className="position">{date}</h3>
      </div>
      <p className="indent-large text">
        {description}
      </p>
      <br />
    </div>
  );
};

export default Projects;
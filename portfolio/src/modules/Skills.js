import React from 'react';

const Skills = ({ icon, data }) => {
  return (
    <div>
      <div className="column">
        {/* Render the passed SVG icon */}
        <div className="icon-wrapper">
            {icon}
        </div>
        <h3 className="organization">{data.title}</h3>
      </div>
      
      <div className="indent-large container">
        {Object.entries(data).map(([key, list]) => {
          if (key === 'title') return null;

          return list.map(item => (
            <p key={item} className="text skillpoint">{item}</p>
          ));
        })}
      </div>
      <br />
    </div>
  );
};

export default Skills;
import React from 'react';

const Experience = ({ logo, title, position, dates, description, invert = false, icon_extras = false }) => {
  return (
    <div>
      <div className="column">
        <img 
          className={`icon ${invert ? 'invertimg' : ''} ${icon_extras ? 'icon-extras' : ''}`}
          src={logo} 
          alt={`${title} Logo`} 
        />
        <h3 className="organization">{title}</h3>
      </div>
      
      {dates.map((date, index) => (
        <div className="indent" key={index}>
          <div className="table">
            <p className="position">{position}</p>
            <p className="position">{date}</p>
          </div>
        </div>
      ))}

      <p className="indent-large text">
        {description}
      </p>
      <br />
    </div>
  );
};

export default Experience;
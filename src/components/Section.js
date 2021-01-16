import React from 'react';
import './Section.scss';

function Section({ title, icon, alt, description }) {
  return (
    <section>
      <h4>{title}</h4>
      <img src={icon} alt={alt} />
      <p>{description}</p>
      <button>Learn More</button>
    </section>
  );
}

export default Section;

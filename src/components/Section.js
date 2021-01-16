import React from 'react';
import './Section.scss';

function Section({ title, icon, alt, description, toggleForm, setToggleForm }) {
  return (
    <section>
      <h4>{title}</h4>
      <img src={icon} alt={alt} />
      <p>{description}</p>
      <button onClick={() => setToggleForm(!toggleForm)}>Learn More</button>
    </section>
  );
}

export default Section;

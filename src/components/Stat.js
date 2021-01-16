import React from 'react';
import './Stat.scss';

function Stat({ header, description }) {
  return (
    <li className='Stat'>
      <h4>{header}</h4>
      <p>{description}</p>
    </li>
  );
}

export default Stat;

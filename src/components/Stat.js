import React from 'react';
import './Stat.scss';

function Stat({header, description}) {
    return (
        <li className="Stat">
            <h1>
                {header}
            </h1>
            <span>
                {description}
            </span>
        </li>
      );
}

export default Stat;
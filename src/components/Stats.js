import React from 'react';
import './Stats.scss';
import Stat from './Stat';

import info from '../info';

function Stats() {
  return (
    <section className='Stats'>
      <ol>
        {info.stats.map(({ header, description }, index) => {
          return (
            <Stat
              header={header}
              key={`state-${index}`}
              description={description}
            />
          );
        })}
      </ol>
      <p>
        *Contactless unlocking with mobile access. Bluetooth locking devices and
        mobile key credentialing solution deployed with Carrier technology
        across multiple industries.
      </p>
    </section>
  );
}

export default Stats;

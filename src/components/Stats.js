import React from 'react';
import './Stats.scss';
import Stat from './Stat';

import info from '../info';

function Stats() {
    return (
        <section className="Stats">
            <ol>
                {
                    info.stats.map(({ header, description }) => {
                        return <Stat header={header} description={description} />
                    })
                }
            </ol>
            <span>
                *Bluetooth locking devices and mobile key credentialing solution deployed with Carrier technology across multiple industries
            </span>
        </section>
    );
}

export default Stats;
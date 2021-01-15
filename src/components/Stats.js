import React from 'react';
import './Stats.scss';
import Stat from './Stat';

import info from '../info';

function Stats() {
    return (
        <section className="Stats">
            <ol>
                {
                    info.stats.map(({header, description}) => {
                        return <Stat header={header} description={description} />
                    })
                }
            </ol>
        </section>
    );
}

export default Stats;
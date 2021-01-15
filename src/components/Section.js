import React from 'react';
import './Section.scss';

function Section({title, icon, description}) {
    return (
        <section>
            <h1>{title}</h1>
            <div>
                <img src={icon} />
                <div>
                    <p>
                        {description}
                    </p>
                    <button>
                        Learn More
                    </button>
                </div>
            </div>
        </section>
      );
}

export default Section;
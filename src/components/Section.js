import React from 'react';
import './Section.scss';

function Section({title, icon, alt, description}) {
    return (
        <section>
            <h1>{title}</h1>
            <div>
                <img src={icon} alt={alt} />
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
import React from 'react';
import './Navigation.scss';

import OnityLogo from '../assets/onity-logo-icon.png';

function Navigation() {
    return (
        <nav>
            <img src={OnityLogo}/>
            <button>Request Info</button>
        </nav>
      );
}

export default Navigation;
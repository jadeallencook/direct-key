import React from 'react';
import './Navigation.scss';

import OnityLogo from '../assets/onity-logo-icon-white.png';

function Navigation() {
  return (
    <nav>
      <div></div>
      <div>
        <img src={OnityLogo} alt='onity logo' />
      </div>
      <div>
        <button>Request Info</button>
      </div>
    </nav>
  );
}

export default Navigation;

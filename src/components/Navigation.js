import React from 'react';
import './Navigation.scss';

import OnityLogo from '../assets/onity-logo-icon-white.png';

function Navigation({ toggleForm, setToggleForm}) {

  return (
    <nav>
      <div></div>
      <div>
        <img src={OnityLogo} alt='onity logo' onClick={() => setToggleForm(false)} />
      </div>
      <div>
        <button onClick={() => setToggleForm(!toggleForm)}>Request Info</button>
      </div>
    </nav>
  );
}

export default Navigation;

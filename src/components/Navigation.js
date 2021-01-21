import React from 'react';
import './Navigation.scss';

import OnityLogo from '../assets/onity-logo-icon-white.png';

function Navigation({ toggleForm, setToggleForm }) {
  return (
    <nav>
      <div></div>
      <div>
        <a href='http://en.onity.com/Pages/Home.aspx' target='_blank' rel="noreferrer">
          <img src={OnityLogo} alt='onity logo' />
        </a>
      </div>
      <div>
        <button onClick={() => setToggleForm(!toggleForm)}>Request Info</button>
      </div>
    </nav>
  );
}

export default Navigation;

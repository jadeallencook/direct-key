import React from 'react';
import './Footer.scss';

import LinkedIn from '../assets/linkedin-icon.png';

function Footer() {
  return (
    <footer>
      <p>Related Links:</p>
      <p>
        See DirectKey’s Evolution | Learn more about DirectKey | Get in Touch
      </p>
      <img src={LinkedIn} alt='linkedin social link' />
      <hr />
      <p>
        Privacy Notice | Terms of Use | Vulnerability Reporting | A Carrier
        Company | All Rights Reserved
        <br /><br />© 2021 Carrier
      </p>
    </footer>
  );
}

export default Footer;

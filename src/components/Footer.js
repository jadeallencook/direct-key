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
        <a
          href='https://www.corporate.carrier.com/legal/privacy-notice'
          target='_blank'
          rel='noreferrer'
        >
          Privacy Notice
        </a>
        {` | `}
        <a
          href='https://www.corporate.carrier.com/legal/terms-of-use'
          target='_blank'
          rel='noreferrer'
        >
          Terms of Use
        </a>
        {` | `}
        <a
          href='https://www.ccs.utc.com/ccs/en/worldwide/contact-us/vulnerability-reporting/'
          target='_blank'
          rel='noreferrer'
        >
          Vulnerability Reporting
        </a>
        {` | `}
        <a
          href='https://www.corporate.carrier.com/'
          target='_blank'
          rel='noreferrer'
        >
          A Carrier Company
        </a>
        {` | `}All Rights Reserved
        <br />
        <br />© 2021 Carrier
      </p>
    </footer>
  );
}

export default Footer;

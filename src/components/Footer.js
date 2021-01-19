import React from 'react';
import './Footer.scss';
import Carrier from '../assets/carrier-logo.svg';
import Healthy from '../assets/healthy-buildings.png';
import LinkedIn from '../assets/linkedin-icon.png';

function Footer() {
  return (
    <footer>
      <p>Related Links:</p>
      <p>
        See DirectKey’s Evolution | Learn more about DirectKey | Get in Touch
      </p>
      <a
        href='https://www.linkedin.com/company/onity'
        target='_blank'
        rel='noreferrer'
      >
        <img src={LinkedIn} alt='linkedin social link' />
      </a>
      <hr />
      <div>
        <div>
          <a
            href='http://directkey.onity.com/images/logo-carrier.png'
            target='_blank'
            rel='noreferrer'
          >
            <img src={Carrier} alt='carrier logo' />
          </a>
          <img src={Healthy} alt='healthy buildings logo' />
        </div>
        <p>
          © 2021 Carrier. All Rights Reserved. Bluetooth is a registered
          trademark of Bluetooth SIG.
          <a
            href='https://www.corporate.carrier.com/legal/privacy-notice'
            target='_blank'
            rel='noreferrer'
          >
            Privacy Notice
          </a>
          <a
            href='https://www.corporate.carrier.com/legal/terms-of-use'
            target='_blank'
            rel='noreferrer'
          >
            Terms of Use
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

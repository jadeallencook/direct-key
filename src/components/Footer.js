import React from 'react';
import './Footer.scss';
import Carrier from '../assets/carrier-logo.svg';
import Healthy from '../assets/healthy-buildings.png';
import LinkedIn from '../assets/linkedin-icon.svg';

function Footer() {
  return (
    <footer>
      <hr />
      <div>
        <div>
          <a
            href='https://www.corporate.carrier.com/'
            target='_blank'
            rel='noreferrer'
          >
            <img src={Carrier} alt='carrier logo' />
          </a>
          <a
            href='https://www.corporate.carrier.com/healthybuildings/'
            target='_blank'
            rel='noreferrer'
          >
            <img src={Healthy} alt='healthy buildings logo' />
          </a>
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
        <a
          href='https://www.linkedin.com/company/onity'
          target='_blank'
          rel='noreferrer'
        >
          <img src={LinkedIn} alt='linkedin social link' />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

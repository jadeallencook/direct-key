import React from 'react';
import './Footer.scss';

import LinkedIn from '../assets/linkedin-icon.png';

function Footer() {
    return (
        <footer>
            <div>
                <span>
                    Related Links:
                </span>
                <br />
                <span>
                    See DirectKey’s Evolution | Learn more about DirectKey | Get in Touch | <img src={LinkedIn} />
                </span>
            </div>
            <hr />
            <div>
                <img />
                <div>
                    <span>
                        Privacy Notice | Terms of Use | Vulnerability Reporting | A Carrier Company | All Rights Reserved
                    </span>
                    <span>
                        © 2021 Carrier
                    </span>
                </div>
                <img />
            </div>
        </footer>
    );
}

export default Footer;
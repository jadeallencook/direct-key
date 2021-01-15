import './App.scss';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Form from './components/Form';
import Section from './components/Section';
import Stats from './components/Footer';
import Footer from './components/Footer';

import CloudPhone from './assets/cloud-phone-icon.png';
import Lock from './assets/lock-icon.png';
import BluetoothLock from './assets/bluetooth-lock-icon.png';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Section
        title='A Direct Way to “Go Contactless”'
        icon={CloudPhone}
        description='Onity offers multiple ways to seamlessly deploy mobile access at your property - whether you want to use our DirectKey app, integrate DirectKey into your brand’s loyalty app or integrate DirectKey with a third- party app. Hotels also can reduce deployment costs and time while preserving their hardware investment, as DirectKey can retrofit to existing locks. And for new projects, Onity Trillium® and Serene™ locks are DirectKey-ready right out of the box. Easily incorporate the DirectKey system with existing property management systems (PMS) and Onity’s OnPortal™ locking and access control solution.' />
      <Section
        title='A Direct Way to Keep Properties and Guests Secure'
        icon={Lock}
        description='DirectKey technology protects mobile key credentials using 128-bit AES encryption which provides an additional layer of security on top of features already built into your locking system, such as user access permissions and audit trails.' />
      <Section
        title='A Proven Solution Across Industries.'
        icon={BluetoothLock}
        description='The mobile credentialing platform powering DirectKey has been deployed across an installed base of more than 4 million Bluetooth locking devices in multiple industries—including Hospitality, Real Estate, Energy, and Financial.' />
      <Stats />
      <Footer />
    </div>
  );
}

export default App;

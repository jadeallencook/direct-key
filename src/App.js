import './App.scss';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Form from './components/Form';
import Section from './components/Section';
import Stats from './components/Stats';
import Footer from './components/Footer';

import info from './info';
import { useState } from 'react';
import HandSrc from './assets/holding-phone-foreground.png';

function App() {
  const [toggleForm, setToggleForm] = useState(false);

  return (
    <div className='App'>
      <Navigation toggleForm={toggleForm} setToggleForm={setToggleForm} />
      {toggleForm ? (
        <Form />
      ) : (
        <>
          <Header />
          <img
            src={HandSrc}
            className="Hand"
            alt='hand holding phone'
          />
          {info.sections.map(({ title, icon, alt, description }, index) => {
            return (
              <Section
                title={title}
                icon={icon}
                alt={alt}
                description={description}
                key={index}
                toggleForm={toggleForm}
                setToggleForm={setToggleForm}
              />
            );
          })}
          <Stats />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;

import './App.scss';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Form from './components/Form';
import Section from './components/Section';
import Stats from './components/Stats';
import Footer from './components/Footer';

import info from './info';
import { useState } from 'react';

function App() {
  const [toggleForm, setToggleForm] = useState(true);

  return (
    <div className="App">
      <Navigation />
      {
        toggleForm && <Form />
      }
      {
        !toggleForm && <>
          <Header />
          {
            info.sections.map(({ title, icon, alt, description }, index) => {
              return <Section
                title={title}
                icon={icon}
                alt={alt}
                description={description}
                key={index}
              />
            })
          }
          <Stats />
          <Footer />
        </>
      }
    </div>
  );
}

export default App;

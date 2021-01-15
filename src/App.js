import './App.scss';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Form from './components/Form';
import Section from './components/Section';
import Stats from './components/Footer';
import Footer from './components/Footer';

import info from './info';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      {
        info.sections.map(({title, icon, alt, description}, index) => {
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
    </div>
  );
}

export default App;

import './App.scss';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Form from './components/Form';
import Section from './components/Section';
import Stats from './components/Footer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Section />
      <Stats />
      <Footer />
    </div>
  );
}

export default App;

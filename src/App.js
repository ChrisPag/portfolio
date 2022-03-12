import './css/App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';
import {useEffect} from 'react';

function App() {

  useEffect(() => {
    document.title = "Christina Paguirigan";  
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

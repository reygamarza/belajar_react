import './App.css';
import Header from './Header';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/about" element={ <About />} />
          <Route path="/contact" element={ <Contact />} />
          <Route path="/projects" element={ <Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

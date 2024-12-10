import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Detail from './Detail';
import Header from './Header';
import About from './About';

function App() {
  return (
    <Router>
      <Header />
      <Container className="p-3">
        <div className="p-5 mb-4 bg-light rounded-3">
          <h1>Welcome to the Photo Gallery!</h1>
          <p>You can search photos by title here</p>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </div>
      </Container>
    </Router>
  );
}

export default App;

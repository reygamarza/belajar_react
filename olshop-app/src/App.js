import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import CartPage from './CartPage';
import DetailPage from './DetailPage';

function App() {
  return (
    <Router>
      <Header />
      <Container className="p-3">
        <div className="p-5 mb-4 bg-light rounded-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </Container>
    </Router>
  );
}

export default App;

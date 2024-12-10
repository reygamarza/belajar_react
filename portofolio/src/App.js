import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Stores from './Pages/Stores';
import Header from './Layouts/Header';


function App() {
  return (
    <Router>
      <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stores" element={<Stores />} />
          </Routes>
    </Router>
  );
}

export default App;

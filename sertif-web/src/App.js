import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Layouts/Header';
import Profil from './Pages/Profil';
import Fasilitas from './Pages/Fasilitas';

function App() {
  return (
    <Router>
      <div className="px-auto" style={{ padding: "10px 100px 10px" }}>
        <Header />
        <Routes>
          <Route path="/" element={<Profil />} />
          <Route path="/fasilitas" element={<Fasilitas />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

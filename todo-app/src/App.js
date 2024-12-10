import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Add from "./Add";

function App() {
  return (
    <Router>
      <div className="container">
      <Header />
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/add" element={<Add /> } />
          <Route path="/edit/:id" element={<Add /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

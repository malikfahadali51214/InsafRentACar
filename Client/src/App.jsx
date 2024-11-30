import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import  './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}
export default App;

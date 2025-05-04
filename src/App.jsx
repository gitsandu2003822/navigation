import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Services from './services';
import ContactUs from './ContactUs';


function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <Link to="/">Home</Link>
      
        <Link to="/services">Services</Link>
        <Link to="/contactUs">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
       
        <Route path="/services" element={<Services />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;

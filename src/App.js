import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Projects from './components/projects/Projects';
import Navbar from './components/header/Navbar';
import Contact from './components/contact/Contact';
import './App.css';

function App() {
  return (

    <Router>
      <div>
        <Navbar />
          <Routes>
            <Route path="/" element={<About/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;

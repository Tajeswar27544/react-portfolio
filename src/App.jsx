import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Home from './components/Home';
import Committee from './components/Committee';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Banner />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/committee" element={<Committee />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/call-for-papers" element={<div>Call For Papers Page</div>} />
        <Route path="/submission" element={<div>Submission Page</div>} />
        <Route path="/technical-program-schedule" element={<div>Technical Program Schedule Page</div>} />
        <Route path="/accepted-registered-papers" element={<div>Accepted & Registered Papers Page</div>} />
        <Route path="/best-paper" element={<div>Best Paper Page</div>} />
        <Route path="/keynote-speaker" element={<div>Keynote Speakers Page</div>} />
        <Route path="/plenary-speaker" element={<div>Plenary Speakers Page</div>} />
        <Route path="/registration" element={<div>Registration Page</div>} />
        <Route path="/scientific-committee" element={<div>Scientific Committee Page</div>} />
        <Route path="/advisory-committee" element={<div>Advisory Committee Page</div>} />
        <Route path="/technical-program-committee" element={<div>Technical Program Committee Page</div>} />
        <Route path="/technical-sponsor" element={<div>Technical Sponsors Page</div>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

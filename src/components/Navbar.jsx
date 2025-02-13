import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">BBIT Conference</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="authorsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Authors
              </a>
              <ul className="dropdown-menu" aria-labelledby="authorsDropdown">
                <li><Link className="dropdown-item" to="/call-for-papers">Call For Papers</Link></li>
                <li><Link className="dropdown-item" to="/submission">Submission</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="programmeDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Programme
              </a>
              <ul className="dropdown-menu" aria-labelledby="programmeDropdown">
                <li><Link className="dropdown-item" to="/technical-program-schedule">Technical Program Schedule</Link></li>
                <li><Link className="dropdown-item" to="/accepted-registered-papers">Accepted & Registered Papers</Link></li>
                <li><Link className="dropdown-item" to="/best-paper">Best Paper</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="speakersDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Speakers
              </a>
              <ul className="dropdown-menu" aria-labelledby="speakersDropdown">
                <li><Link className="dropdown-item" to="/keynote-speaker">Keynote Speakers</Link></li>
                <li><Link className="dropdown-item" to="/plenary-speaker">Plenary Speakers</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/registration">Registration</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="committeesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Committees
              </a>
              <ul className="dropdown-menu" aria-labelledby="committeesDropdown">
                <li><Link className="dropdown-item" to="/scientific-committee">Scientific Committee</Link></li>
                <li><Link className="dropdown-item" to="/advisory-committee">Advisory Committee</Link></li>
                <li><Link className="dropdown-item" to="/technical-program-committee">Technical Program Committee</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/technical-sponsor">Technical Sponsors</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
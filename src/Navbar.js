import React from 'react'
import './css/navbar.css';
function Navbar() {
  return (
    <nav>
      <h1 className="nav-logo">{`<Thaya/Cheva>`}</h1>
      <div className="nav-menu">
            <ul className="nav-menu-container">
            <li><a href="#hero">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#project">PROJECTS</a></li>
            <li><a href="#contact">CONTACT</a></li>
            </ul>
      </div>
    </nav>
  );
}

export default Navbar
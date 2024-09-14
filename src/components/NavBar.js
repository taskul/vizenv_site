import React from 'react';
import './NavBar.css';

const NavBar = ({ onAboutClick, onDownloadClick }) => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#about" onClick={onAboutClick}>About</a></li>
        <li><a href="#download" onClick={onDownloadClick}>Download</a></li>
        <li><a href="https://youtu.be/QKxO1FUUlJo">Demo</a></li>
      </ul>
    </nav>
  );
};


export default NavBar;

// import React from 'react';
// import './NavBar.css';

// const NavBar = () => {
//   return (
//     <nav className="navbar">
//       <ul>
//         <li><a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">GitHub</a></li>
//         <li><a href="/docs">Docs</a></li>
//         <li><a href="/about">About</a></li>
//       </ul>
//     </nav>
//   );
// };

// export default NavBar;

import React from 'react';
import './NavBar.css';

const NavBar = ({ onAboutClick, onDownloadClick }) => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#about" onClick={onAboutClick}>About</a></li>
        <li><a href="#download" onClick={onDownloadClick}>Download</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;

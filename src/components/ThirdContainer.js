import React from 'react';
import './ThirdContainer.css';

const ThirdContainer = () => {
  return (
    <div className="third-container">
      <h2>Try out beta version now</h2>
      <p>
        Our beta version is now available for download. Click the link below to get started!
      </p>
      <a href="https://github.com/taskul/vizenv/releases/tag/v1.0.0-beta-b" className='download-button'>Download VizEnv beta</a>

      <a href="https://taskul.xyz/" className='secondary-button'>Author</a>
    </div>
  );
};

export default ThirdContainer;

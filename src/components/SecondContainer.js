import React from 'react';
import './SecondContainer.css';

const SecondContainer = () => {
  return (
    <div className="second-container">
      <div className='container-row'>
        <img src={process.env.PUBLIC_URL+ "/images/React.png"} alt="React Logo" />
        <img src={process.env.PUBLIC_URL+ "/images/Electron.png"} alt="Electron Logo" />
      </div>
      <div className='container-column'>
        <h1>About VizEnv</h1>
        <p className=''>Welcome to your ultimate terminal companion for daily tasks! Our terminal app is designed to enhance your productivity with a user-friendly interface and powerful features.</p>
      </div>
      <h2>Key Features:</h2>
      <ul>
          <li><b>Readable UI:</b> Enjoy a cleaner, easier-to-read terminal window that minimizes eye strain and maximizes efficiency.</li>
          <li><b>Command Highlighting:</b> Quickly locate your commands in the output stack with highlighted user inputs, ensuring you never miss a step.</li>
          <li><b>Quick Access Menu:</b> Save time with our convenient menu for running commonly used commands in Python and Node.js environments with just a click of a button.</li>
          <li><b>Multiline Command Entry:</b> Seamlessly write and execute multiline code, such as functions, in Python or Node.js interactive shell.</li>
          <li><b>Interactive Package Manager:</b> List installed packages or dependencies and manage updating or uninstalling them directly in the terminal window with a click of a button.</li>
      </ul>
      <p>Experience a smarter, more efficient way to manage your terminal tasks with our app. Whether you're a developer or a power user, our app is tailored to make your workflow smoother and more intuitive.</p>
      <a href="https://vizenv.xyz">https://vizenv.xyz</a>
    </div>
  );
};

export default SecondContainer;

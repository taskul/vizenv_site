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
<table>
  <tr>
    <td><b>Readable UI:</b></td>
    <td>Enjoy a cleaner, easier-to-read terminal window that minimizes eye strain and maximizes efficiency.</td>
  </tr>
  <tr>
    <td><b>Command Highlighting:</b></td>
    <td>Quickly locate your commands in the output stack with highlighted user inputs, ensuring you never miss a step.</td>
  </tr>
  <tr>
    <td><b>Quick Access Menu:</b></td>
    <td>Save time with our convenient menu for running commonly used commands in Python and Node.js environments with just a click of a button.</td>
  </tr>
  <tr>
    <td><b>Multiline Command Entry:</b></td>
    <td>Seamlessly write and execute multiline code, such as functions, in Python or Node.js interactive shell.</td>
  </tr>
  <tr>
    <td><b>Interactive Package Manager:</b></td>
    <td>List installed packages or dependencies and manage updating or uninstalling them directly in the terminal window with a click of a button.</td>
  </tr>
</table>

      <p><b> Experience a more efficient way to manage your terminal tasks with our app. Whether you're a developer or a power user, our app is tailored to make your workflow smoother and more intuitive.</b></p>
    </div>
  );
};

export default SecondContainer;

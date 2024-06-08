// import React from 'react';
// import { useSpring, animated } from 'react-spring';
// import NavBar from './components/NavBar';
// import MainContainer from './components/MainContainer';
// import SecondContainer from './components/SecondContainer';
// import ThirdContainer from './components/ThirdContainer';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <NavBar />
//       <MainContainer />
//       <SecondContainer />
//       <ThirdContainer />
//     </div>
//   );
// }

// export default App;

import React, { useRef } from 'react';
import NavBar from './components/NavBar';
import MainContainer from './components/MainContainer';
import SecondContainer from './components/SecondContainer';
import ThirdContainer from './components/ThirdContainer';
import './App.css';

function App() {
  const aboutRef = useRef(null);
  const downloadRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <NavBar onAboutClick={() => scrollToSection(aboutRef)} onDownloadClick={() => scrollToSection(downloadRef)} />
      <MainContainer />
      <div ref={aboutRef}>
        <SecondContainer />
      </div>
      <div ref={downloadRef}>
        <ThirdContainer />
      </div>
    </div>
  );
}

export default App;

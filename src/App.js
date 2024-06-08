import React, { useRef, useEffect } from 'react';
import NavBar from './components/NavBar';
import MainContainer from './components/MainContainer';
import SecondContainer from './components/SecondContainer';
import ThirdContainer from './components/ThirdContainer';
import './App.css';

function App() {
  const aboutRef = useRef(null);
  const downloadRef = useRef(null);

  useEffect(() => {
    document.title = "VizEnv"
 }, []);

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

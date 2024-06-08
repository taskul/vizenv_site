import React, { useEffect, useRef } from 'react';
import './MainContainer.css';

const MainContainer = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            videoElement.play();
          } else {
            videoElement.pause();
          }
        });
      },
      { threshold: 0.5 } // Adjust this threshold as needed
    );

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  return (
    <div className="main-container">
      <h1 className="title">VizEnv: Reimagine What Terminal Could Be</h1>
      <video ref={videoRef} src={process.env.PUBLIC_URL+ "/images/vizenv.mp4"} muted loop></video>
    </div>
  );
};

export default MainContainer;


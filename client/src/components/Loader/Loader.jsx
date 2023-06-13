import React, { useState, useEffect } from 'react';
import './loader.css'; // Import CSS styles for the loading page
import { Html } from '@react-three/drei';

function LoadingPage() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 10;
        if (newProgress === 100) {
          clearInterval(interval);
        }
        return newProgress;
      });
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Html>
        <div className="loading-page">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
    </div>
    </Html>
  );
}

export default LoadingPage;

import { useState, useEffect } from 'react';

const MAX_WIDTH = 1200;

function getWindowDimensions() {
  const {
    innerWidth: width,
    innerHeight: height
  } = window;
  
  return { width, height};
}


function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export {
  useWindowDimensions,
  MAX_WIDTH
}
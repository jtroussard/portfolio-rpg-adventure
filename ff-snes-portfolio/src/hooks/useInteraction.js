import { useEffect } from 'react';

const useInteraction = (interactCallback) => {
  const handleKeyDown = (e) => {
    if (e.key.toLowerCase() === 'e') {
      interactCallback();
      console.log('E key pressed');
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
};

export default useInteraction;

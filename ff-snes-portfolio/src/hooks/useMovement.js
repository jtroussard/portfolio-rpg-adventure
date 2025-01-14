import { useState, useEffect } from 'react';

const useMovement = () => {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const speed = 10; // Movement speed in pixels

  const handleKeyDown = (e) => {
    switch (e.key.toLowerCase()) {
      case 'w':
      case 'arrowup':
        setPosition((prev) => ({ ...prev, y: prev.y - speed }));
        break;
      case 's':
      case 'arrowdown':
        setPosition((prev) => ({ ...prev, y: prev.y + speed }));
        break;
      case 'a':
      case 'arrowleft':
        setPosition((prev) => ({ ...prev, x: prev.x - speed }));
        break;
      case 'd':
      case 'arrowright':
        setPosition((prev) => ({ ...prev, x: prev.x + speed }));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return position;
};

export default useMovement;

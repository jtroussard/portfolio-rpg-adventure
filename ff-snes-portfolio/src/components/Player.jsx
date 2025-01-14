import React from 'react';

const Player = ({ position, interactCallback }) => {
  const playerStyle = {
    position: 'absolute',
    width: '40px',
    height: '40px',
    backgroundColor: 'blue',
    left: `${position.x}px`,
    top: `${position.y}px`,
  };

  const handleInteract = () => {
    interactCallback();
  };

  return <div style={playerStyle}></div>;
};

export default Player;

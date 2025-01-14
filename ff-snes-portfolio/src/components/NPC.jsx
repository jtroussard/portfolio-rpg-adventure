import React from 'react';

const NPC = ({ position, onInteract }) => {
  const npcStyle = {
    position: 'absolute',
    width: '40px',
    height: '40px',
    backgroundColor: 'green',
    left: `${position.x}px`,
    top: `${position.y}px`,
  };

  return <div style={npcStyle} onClick={onInteract}></div>;
};

export default NPC;

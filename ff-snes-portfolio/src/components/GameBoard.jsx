import React from 'react';
import Player from './Player';
import useMovement from '../hooks/useMovement';
import useInteraction from '../hooks/useInteraction';

const GameBoard = () => {
  const position = useMovement();
  const interactCallback = useInteraction();

  const boardStyle = {
    width: '800px',
    height: '600px',
    backgroundColor: '#111',
    position: 'relative',
    margin: '50px auto',
    border: '4px solid white',
  };

  return (
    <div style={boardStyle}>
      <Player position={position} />
    </div>
  );
};

export default GameBoard;

import React, { useState } from 'react';
import GameBoard from './components/GameBoard';
import Modal from './components/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <h1 style={{ textAlign: 'center', color: '#fff' }}>Portfolio RPG Adventure</h1>
      <GameBoard />
      <Modal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        content="Welcome to the Portfolio RPG Adventure!"
      />
    </div>
  );
}

export default App;

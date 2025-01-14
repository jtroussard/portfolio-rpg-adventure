import React from 'react';

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  const modalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '20px',
    border: '2px solid black',
    zIndex: 1000,
  };

  return (
    <div style={modalStyle}>
      <button onClick={onClose}>Close</button>
      <div>{content}</div>
    </div>
  );
};

export default Modal;

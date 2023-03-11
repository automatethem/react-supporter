import React from 'react';

const JumoButton = ({ children, backgroundColor, fontColor, onClick }) => {
  return (
    <button
      style={{ backgroundColor: `${backgroundColor}`, color: `${fontColor}` }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default JumoButton;

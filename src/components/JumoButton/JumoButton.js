import React from 'react';

const JumoButton = ({ label, backgroundColor, fontColor, onClick }) => {
  return (
    <button
      style={{ backgroundColor: `${backgroundColor}`, color: `${fontColor}` }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default JumoButton;

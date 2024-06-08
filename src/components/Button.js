import React from 'react';

// OpenButton component definition
const OpenButton = ({ onClick }) => {
  return (
    // Button that triggers the onClick function when clicked
    <button onClick={onClick} className='open-button'>
      Open Dialog
    </button>
  );
};

export default OpenButton;

import React from 'react';
import { FaStar } from 'react-icons/fa'; // Import the FaStar icon from react-icons

// Star component definition
const Star = ({ filled, onClick }) => {
  return (
    <FaStar 
      // Set the color of the star based on the 'filled' prop
      color={filled ? "gold" : "gray"} 
      // Attach the 'onClick' handler to the star
      onClick={onClick} 
      // Add inline styling to change the cursor to pointer on hover
      style={{ cursor: "pointer" }} 
    />
  );
};

export default Star;
import React, { useState } from 'react';
import Star from './Star'; // Import the Star component
import '../style/styles.css'; // Import the CSS file for styling

const StarRating = () => {
  // Declare a state variable 'rating' with initial value 0
  const [rating, setRating] = useState(0);

  // Handle the click event on a star, setting the rating state to the clicked value
  const handleClick = (value) => {
    setRating(value);
  };

  // Function to get the corresponding rating word based on the selected rating
  const getRatingWord = () => {
    switch (rating) {
      case 1: return "Poor";
      case 2: return "Fair";
      case 3: return "Good";
      case 4: return "Very Good";
      case 5: return "Excellent";
      default: return "    "; // Default case to handle no rating selected
    }
  };

  return (
    <div className="star-bar-container">
      <div className="stars">
        {/* Render 5 Star components dynamically using the Array.map() method */}
        {[...Array(5)].map((_, index) => (
          <Star 
            key={index} // Provide a unique key for each Star component
            filled={index < rating} // Determine if the star should be filled based on the rating
            onClick={() => handleClick(index + 1)} // Handle click event to set the rating
          />
        ))}
      </div>
      {/* Container for displaying the rating word */}
      <div className="rating-word-container">
        <div className="rating-word">{getRatingWord()}</div> {/* Display the rating word */}
      </div>
    </div>
  );
};

export default StarRating;
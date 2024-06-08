import React from 'react';
import '../style/styles.css'; // Import the CSS file for styling

// Dialog component definition
const Dialog = ({ onClose }) => {
  return (
    // Overlay for the dialog, covering the entire screen
    <div className="dialog-overlay">
      {/* Content of the dialog */}
      <div className="dialog-content">
        <h2>Dialog message</h2> {/* Dialog message */}
        <button onClick={onClose}>Close</button> {/* Button to close the dialog */}
      </div>
    </div>
  );
};

export default Dialog;

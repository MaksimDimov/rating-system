import React, { useState } from 'react';
import StarRating from './components/StarRating';
import Dialog from './components/Dialog';
import OpenDialogButton from './components/Button';
import './style/styles.css';

function App() {
  const [dialogOpen, DialogOpen] = useState(false);

  const openDialog = () => {
    DialogOpen(true);
  };

  const closeDialog = () => {
    DialogOpen(false);
  };

  return (
    <div className="container">
      {!dialogOpen && (
        <>
          <h1>Star Rating System</h1>
          <StarRating />
          <OpenDialogButton onClick={openDialog} />
        </>
      )}
      {dialogOpen && <Dialog onClose={closeDialog} />}
    </div>
  );
}

export default App;

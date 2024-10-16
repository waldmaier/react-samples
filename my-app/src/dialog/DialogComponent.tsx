import React, { useState } from 'react';

function DialogComponent() {
  const [isOpen, setIsOpen] = useState(false); // State to control dialog visibility

  // Open the dialog by setting the state
  const openDialog = () => {
    setIsOpen(true);
  };

  // Close the dialog and remove it from the DOM by setting the state
  const closeDialog = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <h2>React Dialog Example</h2>
      <button onClick={openDialog}>Open Dialog</button>

      {/* Render the dialog only if isOpen is true */}
      {isOpen && (
        <dialog open>
          <h3>Dialog Title</h3>
          <p>This is a dialog box in React.</p>
          <button onClick={closeDialog}>Close</button>
        </dialog>
      )}
    </div>
  );
}

export default DialogComponent;

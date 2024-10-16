import React, { useState, ReactNode } from 'react';

// Define the type for props, including children
type DialogProps = {
  id: string;
  children: ReactNode;  // This allows any React content to be passed as children
};

const DialogComponent = ({ id, children }: DialogProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openDialog = (): void => {
    setIsOpen(true);
  };

  const closeDialog = (): void => {
    setIsOpen(false);
  };

  return (
    <div>
      <h2>React Dialog Example</h2>
      <button onClick={openDialog}>Open Dialog</button>

      {/* Render the dialog only if isOpen is true */}
      {isOpen && (
        <>
          <div className="dialog-backdrop" onClick={closeDialog} />
          <dialog id={id} open aria-hidden={!isOpen}>
            <div>
              {children} {/* Render the passed content here */}
            </div>
            <button onClick={closeDialog} autoFocus>
              Close
            </button>
          </dialog>
        </>
      )}
    </div>
  );
};

export default DialogComponent;

import React, { useState, ReactNode } from 'react';

// Custom hook to manage a dialog's state
const useDialog = (id: string, children: ReactNode) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openDialog = (): void => {
    setIsOpen(true);
  };

  const closeDialog = (): void => {
    setIsOpen(false);
  };

  // Dialog component
  const Dialog = () => (
    <>
      {isOpen && (
        <>
          <div className="dialog-backdrop" onClick={closeDialog} />
          <dialog id={id} open aria-hidden={!isOpen}>
            <div>
              {children} {/* Render the passed content here */}
            </div>
            <button onClick={closeDialog} autoFocus>
              Close Dialog
            </button>
          </dialog>
        </>
      )}
    </>
  );

  return [Dialog, openDialog, closeDialog] as const; // Return the dialog component and functions
};

export default useDialog;

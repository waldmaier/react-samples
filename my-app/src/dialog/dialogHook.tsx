import React, {ReactNode, useState} from 'react';

// Custom hook to manage a dialog's state
const useDialog = (id: string, children: ReactNode) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeDialog = (): void => {
    setIsOpen(false);
  };

  // Dialog component
  const Dialog = () => (
    <>
      {isOpen && (
        <>
          <div className="dialog-backdrop" onClick={closeDialog}/>
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

  return [Dialog, setIsOpen] as const; // Ret  urn the dialog component and functions
};

export default useDialog;

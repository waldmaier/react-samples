import React, {ReactNode, useState} from 'react';

// Custom hook to manage a dialog's state
const useDialog = (id: string, title: string, children: ReactNode) => {
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
            <div className="dialog-header">
              <h3>{title}</h3>
              <button className="close-button" onClick={closeDialog} aria-label="Close dialog">
                &times; {/* Cross symbol */}
              </button>
            </div>
            <div className="dialog-content">
              {children} {/* Render the passed content here */}
            </div>
          </dialog>
        </>
      )}
    </>
  );

  return [Dialog, setIsOpen] as const; // Ret  urn the dialog component and functions
};

export default useDialog;

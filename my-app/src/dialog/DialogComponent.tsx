import React, { useState } from 'react';

type DialogProps = {
  id: string;
};

const DialogComponent = ({ id }: DialogProps) => {
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

import React, {ReactNode, useEffect, useState} from 'react';

// Define the type for props, including children
type DialogProps = {
  id: string;
  children: ReactNode;  // This allows any React content to be passed as children
  open: boolean;
};

const DialogComponent = ({id, children, open}: DialogProps) => {
  return (
    <div>
      <h2>React Dialog Example</h2>
      {/* Render the dialog only if isOpen is true */}
      {open && (
        <>
          <div className="dialog-backdrop" /*onClick={closeDialog}*//>
          <dialog id={id} open aria-hidden={!open}>
            <div>
              {children} {/* Render the passed content here */}
            </div>
          </dialog>
        </>
      )}
    </div>
  );
};

export default DialogComponent;

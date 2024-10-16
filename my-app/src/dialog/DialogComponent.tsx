import React, {ReactNode} from 'react';

// Define the type for props, including children
type DialogProps = {
  id: string;
  children: ReactNode;  // This allows any React content to be passed as children
  open: boolean;
  backdropOnClick?: () => void;
};

const DialogComponent = ({id, children, open, backdropOnClick = () => void null}: DialogProps) => {
  return (
    <div>
      {/* Render the dialog only if isOpen is true */}
      {open && (
        <>
          <div className="dialog-backdrop" onClick={backdropOnClick}/>
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

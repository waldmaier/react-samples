import React, {useState} from 'react';
import DialogComponent from "./DialogComponent";

export const DialogSample = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <h2>React Dialog Example</h2>
      <button onClick={() => setIsOpen(true)}>Open Dialog in App</button>

      <DialogComponent id="example-dialog" open={isOpen} backdropOnClick={() => setIsOpen(false)}>
        <h3>Custom Content Inside Modal</h3>
        <p>This is some dynamic content passed to the modal.</p>
        <button onClick={() => setIsOpen(false)}>Close</button>
      </DialogComponent>
    </>
  );
}

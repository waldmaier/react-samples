import React from 'react';
import useDialog from "./dialogHook";

export const DialogHookSample = () => {
  const [Dialog, setIsOpen] = useDialog(
    'my-dialog-hook',
    'Sample very very very very very very very very very very long Title',
    <>
      <h3>Custom Content Inside Modal Hook</h3>
      <p>This is some dynamic content passed to the modal hook.</p>
      <button onClick={() => setIsOpen(false)}>Close Modal Hook</button>
    </>
  );
  return (
    <>
      <h2>React Dialog Example</h2>
      <button onClick={() => setIsOpen(true)}>Open Dialog Hook 2</button>
      <Dialog/>
    </>
  );
}

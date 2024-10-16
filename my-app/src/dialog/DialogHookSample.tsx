import React from 'react';
import useDialog from "./dialogHook";

export const DialogHookSample = () => {
  const [Dialog, setIsOpen] = useDialog('my-dialog-hook', <p>This is the dialog content!</p>);
  return (
    <>
      <h2>React Dialog Example</h2>
      <h1>My App</h1>
      <button onClick={() => setIsOpen(true)}>Open Dialog Hook 2</button>
      <Dialog/>
    </>
  );
}

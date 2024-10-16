import React from 'react';
import useDialog from "./dialogHook";

export const DialogHookSample = () => {
  const [Dialog, openDialog] = useDialog('my-dialog-hook', <p>This is the dialog content!</p>);
  return (
    <>
      <h2>React Dialog Example</h2>
      <h1>My App</h1>
      <button onClick={openDialog}>Open Dialog Hook</button>
      <Dialog/>
    </>
  );
}

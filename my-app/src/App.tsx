import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import DialogComponent from "./dialog/DialogComponent";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  console.log("app render " + isOpen)
  return (
    <div className="App">
      <h2>React Dialog Example</h2>
      <button onClick={() => setIsOpen(true)}>Open Dialog in App</button>

      <DialogComponent id="example-dialog" open={isOpen} backdropOnClick={() => setIsOpen(false)}>
        <h3>Custom Content Inside Modal</h3>
        <p>This is some dynamic content passed to the modal.</p>
        <button onClick={() => setIsOpen(false)}>Close</button>
      </DialogComponent>
    </div>
  );
}

export default App;

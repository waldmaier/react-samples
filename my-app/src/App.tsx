import React from 'react';
import logo from './logo.svg';
import './App.css';
import DialogComponent from "./dialog/DialogComponent";

function App() {
  return (
    <div className="App">
      <DialogComponent id="example-dialog">
        <h3>Custom Content Inside Modal</h3>
        <p>This is some dynamic content passed to the modal.</p>
      </DialogComponent>
    </div>
  );
}

export default App;

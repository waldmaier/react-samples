import React from 'react';
import './App.css';
import {DialogSample} from "./dialog/DialogSample";
import {DialogHookSample} from "./dialog/DialogHookSample";

function App() {
  return (
    <div className="App">
      <DialogSample/>
      <DialogHookSample/>
    </div>
  );
}

export default App;

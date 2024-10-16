import React from 'react';
import './App.css';
import {DialogSample} from "./dialog/DialogSample";
import {DialogHookSample} from "./dialog/DialogHookSample";

function App() {
  return (
    <div className="App">
      <h1>Here some Samples</h1>
      <DialogSample/>
      <DialogHookSample/>
    </div>
  );
}

export default App;

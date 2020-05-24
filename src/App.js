import React from 'react';
import './App.css';
import initFirebase from './firebase'

function App() {
  initFirebase()
  
  return (
    <div className="App">
      <button type="button">Notify me </button>
    </div>
  );
}

export default App;

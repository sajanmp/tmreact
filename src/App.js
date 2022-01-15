import logo from './logo.svg';
import React, {useState} from 'react'
import './App.css';

function App() {
  return (
    <div className="App">
      <label>First Name</label>
     <input name="first_name"></input>
     <br/>
     <label>Last Name</label>
     <input name="last_name"></input>
    </div>
  );
}

export default App;

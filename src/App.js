import logo from './logo.svg';
import React, {useState} from 'react'
import './App.css';

function App() {
  const [firstName,setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  return (
    <div className="App">
      <label>First Name</label>
     <input name="first_name" value={firstName} onChange={e=>setFirstName(e.target.value)}></input>
     <br/>
     <label>Last Name</label>
     <input name="last_name" value={lastName} onChange={e=>setLastName(e.target.value)}></input>
     <br/>
     <label>Welcome {firstName} {lastName}</label>
    </div>
  );
}

export default App;

import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Request from './request'
function App() {
 const [message, setMessage]=useState([])

 useEffect(()=>{
 Request.get().then(data =>{
    setMessage( data.data.ticket)
 })  
 },[axios.get])
  return (
    <div className="App">
      {message}
    </div>
  );
}

export default App;

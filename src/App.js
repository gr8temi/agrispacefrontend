import React, {useState,useEffect} from 'react';
import Request from './request'
function App() {
 const [message, setMessage]=useState([])

 useEffect(()=>{
 Request.get().then(data =>{
    setMessage( data.data.message)
 })  
 },[])
  return (
    <div className="App">
      {message}
    </div>
  );
}

export default App;

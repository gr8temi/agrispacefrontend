import React, {useState,useEffect} from 'react';
import  'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import Routing from './Routes'
import Request from './request'
function App() {
  
  const [message, setMessage]=useState([])
   
  useEffect(()=>{
  Request.get().then(data =>{
     setMessage( data.data.message)
  })  
  },[])

  return (
    <>
    <Routing />
    {message}
    </>
  );
}

export default App;

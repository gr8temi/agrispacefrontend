import React, {useState,useEffect} from 'react';
import  'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import Routing from './Routes'
import Request from './request'
import './App.css'
function App() {
  
  const [information, setInformation]=useState([])
   
  useEffect(()=>{
  Request.get().then(data =>{
     setInformation( data.data.record)
  })  
  },[])
 

  
  return (
    <>
    <Routing />
    {
       information.map((element,key)=>(

      <h1 key={key}>{element.tagline}</h1>
       ))
    }
    </>
  );
}

export default App;

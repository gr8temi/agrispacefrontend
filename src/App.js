import React, {useState,useEffect,Suspense,lazy} from 'react';
import  'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import Request from './request'
import './App.css'
const Routing = lazy(()=>import('./Routes'))


function App() {
  
  const [information, setInformation]=useState([])
   
  useEffect(()=>{
  Request.get().then(data =>{
     setInformation( data.data.record)
  })  
  },[])
 

  
  return (
    <>
    <Suspense fallback={<div>loading...</div>}>
      <Routing />
    </Suspense>
    
    {
       information.map((element,key)=>(

      <h1 key={key}>{element.tagline}</h1>
       ))
    }
    </>
  );
}

export default App;

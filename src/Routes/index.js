import React, {useState,useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Request from '../request'
import Home from '../pages/home'
function Routing() {
    
     return (
       <>
       <Router>
        <Navbar/> 
        <Switch>
           <Route path='/' exact component = {Home}/>
        </Switch>
        <Footer/>
       </Router>
       </>
     );
   }

export default Routing;
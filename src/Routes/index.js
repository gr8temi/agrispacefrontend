import  React, {Suspense,lazy} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
const Navbar = lazy(()=>import('../Components/Navbar'))
const Footer = lazy(()=>import('../Components/Footer'))
const Home = lazy(()=>import('../pages/home'))
function Routing() {
    
     return (
       <Router>
         <Suspense fallback={<div>Loading...</div>}>
        <Navbar/> 
        <Switch>
            <Route path='/' exact component = {Home}/>
        </Switch>
        <Footer/>
        </Suspense>
       </Router>
     );
   }

export default Routing;
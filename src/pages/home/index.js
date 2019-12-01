import React, {Suspense,lazy} from 'react';

import {start} from './data'

const Hero = lazy(()=>import('../../Components/Hero'))
const Card = lazy(()=>import('../../Components/Card'))



function Home() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
       <Hero/>
    <div className="container mt-5" data-testid="home-id" key="home">
      <div className="d-flex flex-column align-items-center">
            <h2>GET STARTED</h2>
            <p className="start-tagline">Getting your job and hiring hands to get your job done as never been more easy. Just do the following </p>
            <div className="row my-card justify-content-center" style={{width:"100%"}}>
            {start.map((element)=>(
              <Card key={element.title} image={element.image} title={element.title} tagline={element.tagline} Link={element.link} />
            
            ))}
            </div>  
       </div>
         
      </div>
       
    </Suspense>
   
  );
}

export default Home;

import React, {Suspense,lazy} from 'react';
const Hero = lazy(()=>import('../../Components/Hero'))
function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
       <Hero/>
    </Suspense>
   
  );
}

export default Home;

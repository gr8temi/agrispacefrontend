import React from 'react';
import banner from './static/images/agric.png'
import './static/css/Hero.css'
function Hero(props) {


    return (
        <div className="position-relative" data-testid="heroTest">
            <img className="banner" src={banner} alt="banner" />
            <div className="position-absolute tagline-class" style={{width:"100%", height:"100%"}}>
                <div className="d-flex flex-column tagline pt-3">
                        <h1 className="text-center">We connect you <br/> To those who need your services <br/> and give you the best hand to do your business</h1>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-agric mr-2 shadow">Learn More</button>
                        <button className="btn btn-white ml-2 shadow">Get started</button>
                    </div>
                    
                </div>
            </div>
        </div> 
    );
}

export default Hero;    
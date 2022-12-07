import React from 'react';
import { Button } from 'antd';
import './Banner.css';

function Banner() {
  return (
   
    
      <div className='container-col-2'>
        <div className="container-sec-1">
          <h1 className="hero-heading">
          Funny Tees, Laughably Low Prices
          </h1>
          <p className="hero-para">
          We could all do with a chuckle. Wear a Tee-<br></br>Hee T-shirt today and spread some cheer!

          </p>
          {/* <Button className="Primary">
           Sign Up
          </Button> */}
        </div>

        {/* for image  */}
        <div className='container-sec-2'>
        <img src={require('../../assets/bannerimg1.svg').default}/>
         <img src={require('../../assets/bannerimg2.svg').default}/>
        </div>
      </div>


      
     
      
  )
}

export default Banner
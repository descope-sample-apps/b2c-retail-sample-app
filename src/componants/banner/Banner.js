import React from 'react';
import { Button, Typography } from 'antd';
import './Banner.css';
import arrowRight from "../../assets/arrow-right.svg";

function Banner() {
  return (
   
    <>
    <div className='first-screen'>
      <div className='container-col-2'>
        <div className="container-section-1">
          <h1 className="hero-heading">
          Funny Tees, Laughably Low Prices
          </h1>
          <p className="hero-para">
          We could all do with a chuckle. Wear a Tee-<br></br>Hee T-shirt today and spread some cheer!

          </p>
          <Button className="sign-button">
           Sign Up
          </Button>
        </div>

        {/* for image  */}
        <div className='container-sec-2'>
        <img src={require('../../assets/bannerimg1.svg').default}/>
         <img src={require('../../assets/bannerimg2.svg').default}/>
        </div>
        
      </div>
      <Typography className='banner-divider'>Interested to learn how we built this login experience? &nbsp;&nbsp;&nbsp;&nbsp;
            <img src={arrowRight} alt="arrow" />
      </Typography>
      </div>
      </>

      
     
      
  )
}

export default Banner
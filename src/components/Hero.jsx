import React from 'react'



const Hero = ({title,imageUrl}) =>{
  return(
    <div className='hero container'>
      <div className='banner'>
        <h1>{title}</h1>
        <p>
        Welcome to MediCare, where innovation meets compassionate care.
        From appointment scheduling to patient records, we simplify every aspect of your healthcare journey. 
        Trust us to prioritize your well-being with efficiency, accuracy, and the highest standard of care.
        </p>

      </div>
      <div className="banner">
        <img src={imageUrl} alt="Doctor image" className='animated-image'/>
        <span>
          <img src="/image.png" alt="vector" />
        </span>
      </div>
      
    </div>
    
  );
};

export default Hero 
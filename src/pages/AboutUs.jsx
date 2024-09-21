import React from 'react';
import Hero from '../components/Hero';
import Biography from '../components/Biography';


const AboutUs = () => {
  return (
    <>
      <Hero
        title={"Learn More About Us | MediCare"}
        imageUrl={"/images/about.png"} 
      />
      <Biography
        imageUrl={"/images/dd.png"} 
      />
    </>
  );
}

export default AboutUs;

import React from 'react';



const Appoint = ({title,imageUrl}) =>{
  return(
    <div className='hero container'>
      <div className='banner'>
        <h4 className='appointment'>{title}</h4>
        <p>Book your appointment with ease by selecting a department, time slot, and preferred doctor. 
            Whether you're new or returning, we’re here to provide personalized care.
            Update your details in just a few clicks.
            Your health matters—schedule today!</p>
      </div>
      <div className="banner">
        <img src={imageUrl} alt="appointment"/>
      </div>
      
    </div>
    
  );
};

export default Appoint;
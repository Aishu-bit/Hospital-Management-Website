import React from 'react'



const Biography = ({imageUrl}) =>{
  return(
    <div className='container biography'>
      <div className="banner">
        <img src={imageUrl} alt="doctor image" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who we are?</h3>
        <p>
          At our hospital, we are dedicated to providing exceptional healthcare services through innovation, compassion, and expertise.
        </p>
        <p>
          With a team of experienced professionals and advanced medical technology, we ensure personalized care for every patient.
        </p>
        <p>
        Your health and well-being are our top priority, and we strive to create a safe and supportive environment for all.
        </p>
      </div>
      
    </div>
    
  )
}

export default Biography
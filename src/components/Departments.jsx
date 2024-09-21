import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



const Departments = () => {
  const departmentsArray = [
    {
      name: "Pediatrics",
      imageUrl: "/images/pedia.png",
    },
    {
      name: "Orthopedics",
      imageUrl: "/images/orthopedic.png",
    },
    {
      name: "Cardiology",
      imageUrl: "/images/cardio.png",
    },
    {
      name: "Neurology",
      imageUrl: "/images/neuro.png",
    },
    {
      name: "Oncology",
      imageUrl: "/images/oncology.png",
    },
    {
      name: "Radiology",
      imageUrl: "/images/radio.png",
    },
    {
      name: "Physical Therapy",
      imageUrl: "/images/physical.png",
    },
    {
      name: "Dermatology",
      imageUrl: "/images/dermo.png",
    },
    {
      name: "ENT",
      imageUrl: "/images/ent.png",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className='container departments'>
      <h2>Specialities</h2>
      <Carousel responsive={responsive}>
      {departmentsArray.map((depart, index) => {
            return (
              <div key={index} className="card">
                <div className="depart-name">{depart.name}</div>
                <img src={depart.imageUrl} alt="Department" />
              </div>
            );
          })}
      </Carousel>
    </div>

  )
}

export default Departments
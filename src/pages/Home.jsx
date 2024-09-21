import React from 'react';
import Hero from "../components/Hero";
import Departments from "../components/Departments";
import MessageForm from "../components/MessageForm";


const Home = () => {
  return (
    <>
      <Hero 
        title={"Welcome to Medicare Delivering Excellence in Healthcare, One Patient at a Time – Your Health, Our Priority!"} 
        imageUrl={"/images/new-doctor.png"} // Path to the new image
      />
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;

import React from 'react'
import AppointmentForm from '../components/AppointmentForm';
import Appoint from '../components/Appoint';


const Appointment = () =>{
  return(
    <>
      <Appoint title={"Schedule Your Appointment"} imageUrl={
        "/images/appointment.png"}/>
      <AppointmentForm/>
      
      
    </>
  );
};

export default Appointment;
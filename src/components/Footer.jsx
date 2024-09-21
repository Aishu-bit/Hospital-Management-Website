import React from 'react';
import { Link } from 'react-router-dom';
import {FaPhone} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import {FaLocationArrow} from 'react-icons/fa6';


const Footer = () => {
    return(
        <>
            <footer className='container'>
                <hr/>
                <div>
                  <h3>Medicare</h3>
                  <p> Medicare is committed to redefining healthcare management through cutting-edge technology and patient-centered care. 
                     Our platform streamlines hospital operations, enhances patient engagement, and ensures seamless coordination between healthcare professionals.
                  </p>
                  <p>With a focus on innovation, efficiency, and excellence, we empower hospitals to deliver superior healthcare services while improving operational outcomes and patient satisfaction.
                  </p>
                </div>
                <div className='content'>
                    <div className='distance'>
                        <h4 className='appointment'>Quick Link</h4>
                        <ul>
                            <Link to={"/"}>Home</Link>
                            <Link to={"/appointment"}>Appointment</Link>
                            <Link to={"/about"}>About Us</Link>
                        </ul>
                    </div>
                    <div className='distance'>
                        <h4 className='appointment'>Operating Hours</h4>
                        <ul>
                            <li>MON-FRI: 9 AM to 10 PM</li>
                            <li>SAT-SUN: 10 AM to 9 PM</li>

                        </ul>
                    </div>
                    <div>
                        <h4 className="appointment">Contact</h4>
                        <div>
                            <FaPhone/>
                            <span>9100-9100-00</span>
                        </div>
                        <div>
                            <MdEmail/>
                            <span>medicare@gmail.com</span>
                        </div>
                        <div>
                            <FaLocationArrow/>
                            <span>Mumbai,India</span>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    );
};

export default Footer;
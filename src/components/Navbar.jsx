import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () =>{
    const [show,setShow] = useState(false);
    const{isAuthenticated,setisAuthenticated} = useState(Context);
    const handleLogout = async() =>{
        try {
            await axios.get("link",{withCredentials:true})
            toast.success(res.data.message);
            setIsAuthenticated(false);
        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong."); 
        }
    }

    const navigateTo = useNavigate();
    const gotoLogin = () =>{
        navigateTo("/login");
    }
    return(
        <nav className='container'>
            <div className="logo">MediCare</div>
            <div className={show ? "navLinks showmenu ": "navLinks"}>
                <div className="links">
                    <Link to={'/'}>Home</Link>
                    <Link to={'/appointment'}>Appointment</Link>
                    <Link to={'/insurance'}>Insurance</Link>
                    <Link to={'/about'}>About Us</Link>
                </div>
                {isAuthenticated ? (<button className="logoutBtn btn" onClick={handleLogout}>Logout</button>)
                :(<button className="logoutBtn btn" onClick={gotoLogin}>Login</button>)}
            </div>
            <div className="hamburger" onClick={() => setShow(!show)}>
                <GiHamburgerMenu />
            </div>

        </nav>
    );
};

export default Navbar;


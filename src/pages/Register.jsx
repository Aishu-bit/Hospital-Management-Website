import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Link, Navigate, useNavigate } from "react-router-dom";



const Register = () => {
  const { isAuthenticated, setisAuthenticated } = useContext(Context);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "link",
          { firstName, lastName, dob,email,phone, password ,gender},
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        
          toast.success(res.data.message);
          setIsAuthenticated(true);
          navigateTo("/");
          setFirstName("");
          setLastName("");
          setDob("");
          setEmail("");
          setPhone("");
          setPassword("");  
          setGender("");
          
        
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }

return (
  <div className="container form-component register-form">
    <h2>Sign Up</h2>
    <p>Please Sign Up To Continue</p>
    <form onSubmit={handleRegister}>
      <div>
        <input
          type='text'
          placeholder='FirstName'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type='text'
          placeholder='LastName'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div>
        <input
              type={"date"}
              placeholder="Date of Birth"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
          />
      </div>
      <div>
        <input
          type='text'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type='number'
          placeholder='PhoneNumber'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <div>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
        </select>
        <input
          type='Password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div
        style={{
              gap: "10px",
              justifyContent: "flex-end",
              flexDirection: "row",
            }}>
            <p style={{ marginBottom: 0 }}>Already Registered?</p>
        <Link
                to={"/signin"}
                style={{ textDecoration: "none", color: "#271776ca" }}>
                Login Now
        </Link>

      </div> 
      <div style={{ justifyContent: "center", alignItems: "center" }}>
      < button type="submit">Register</button>
      </div>
    </form>
    </div>
  );
};

export default Register;
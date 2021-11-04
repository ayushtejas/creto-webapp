import React from "react";
import { useState } from 'react';
import DatePicker from 'react-date-picker';


function SignupForm(){
  const [value, onChange] = useState(new Date());
  return(
   <div className="outer">
    <div className="container display">
      <div className="img-sty"><img src="http://creto.in/assets/images/banner/banner04.png" alt=""/></div>
    <div className="form">
    <div className="form-container">
      <div className="signup-h1">
      <h1>Sign Up</h1>
      <div className="sign-quick">
        <h2>It's quick and easy</h2>
      </div>
      </div>
      <div className="signupform">
        <div className="input-form">
          <input type="text" name="" placeholder="Enter First Name"/>
        </div>
        <div className="input-form">
          <input type="text" name="" placeholder="Enter Last Name"/>
        </div>
        <div className="input-form">
          <input type="text" name="" placeholder="Mobile number or email address"/>
        </div>
        <div className="dob">
          <h2>Date of Birth</h2>
          <DatePicker onChange={onChange} value={value} />
        </div>
        <div className="gender">
          <h2>Gender</h2>
          <input type="radio" value="MALE" name="gender"/> Male
          <input type="radio" value="FEMALE" name="gender"/> Female
          <input type="radio" value="OTHER" name="gender"/> Other
        </div>
        
        <div className="signup-btn">
          <button type="submit" >Signup</button>
        </div>
      </div>
      
      </div>
    </div>
	</div>
  </div>
  )
};

export default SignupForm;

import React from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";



  

function LoginForm(){
  

  
  return(
   <div className="outer">
    <div className="container display">
      <div className="img-sty"><img src="http://creto.in/assets/images/banner/banner04.png" alt=""/></div>
    <div className="form">
    <div className="form-container">
      <div className="login-h1">
      <h1>Login</h1>
      </div>
      <div className="loginform">
        <div className="input-form">
          <input type="text" name="" placeholder="Enter Username or Email"/>
        </div>
        <div className="input-form">
        <input type="password" name="" placeholder="Enter Password"/>
        </div>
        <div className="login-btn">
          <button type="submit" >Login</button>
        </div>
      </div>
      <div>
        <a href="#" className="forget">Forgot Password?</a>
      </div>
      <br/>
      <div className="log-via">or Login via</div>
      <div className="oAuth-btn">
        <ul>
          <li className="hide">
        <a href="">< FaGoogle className="o-btn"/></a></li>
        <li className="hide"><a href="">< FaFacebook className="o-btn" /></a></li></ul>
      </div>
      <hr/>
      <div className="signup-btn">
      <a href="./signup">Create New Account</a>
        </div>
      </div>
    </div>
	</div>
  </div>
  )
};

export default LoginForm;

import React from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";


function LoginForm(){
  return(
    <div>
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
      <div className="oAuth-btn">
        <ul>
          <li className="hide">
        <a href="">< FaGoogle className="o-btn"/><p>Google</p></a></li>
        <li className="hide"><a href="">< FaFacebook className="o-btn" /><p>Facebook</p></a></li></ul>
      </div>
      </div>
    </div>
	</div>
  )
};

export default LoginForm;

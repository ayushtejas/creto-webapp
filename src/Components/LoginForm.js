import React from "react";


function LoginForm(){
  return(
    <div>
    <div class="login-container text-c animated flipInX">
                <div>
                    <h1 class="logo-badge text-whitesmoke"><span class="fa fa-user-circle"></span></h1>
                </div>
                    <h3 class="text-whitesmoke">Sign In Template</h3>
                    <p class="text-whitesmoke">Sign In</p>
                <div class="container-content">
                    <form class="margin-t">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Username" required=""/>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="*****" required=""/>
                        </div>
                        <button type="submit" class="form-button button-l margin-b">Sign In</button>

                        <a class="text-darkyellow" href="#"><small>Forgot your password?</small></a>
                        <p class="text-whitesmoke text-center"><small>Do not have an account?</small></p>
                        <a class="text-darkyellow" href="#"><small>Sign Up</small></a>
                    </form>
                    <p class="margin-t text-whitesmoke"><small> Your Name &copy; 2018</small> </p>
                </div>
            </div>
	</div>
  )
};

export default LoginForm;

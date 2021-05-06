import React from 'react';
import Helmet from 'react-helmet';
import { useDispatch } from 'react-redux'
import { customSignInAction } from '../../redux/actions/auth.action';

const Login = () => {
  const dispatch = useDispatch()
  const onLoginFB = () => {
    dispatch(customSignInAction('Facebook'))
  }



  return (
    
    <>
      <Helmet>

        <link href="assets/css/style.css" rel="stylesheet" />
        <link href="assets/css/order-sign_up.css" rel="stylesheet" />
        <link href="assets/css/bootstrap_customized.min.css" rel="stylesheet" />
    

      </Helmet>
<div id="register_bg">


      <div id="register">
        <aside>
          <figure>
            <a href="index.html">
              <img src="assets/img/logo_sticky.svg" alt="" width="140" height="35"></img>

            </a>
          </figure>
          <div className="access_sosial">
            <a onClick={onLoginFB} className="social_bt facebook" href="#0">
              Login With Facebook</a>
            <a className="social_bt google" href="#0">
              Login With Google</a>
          </div>
          <div className="divider">
            <span>
              Or
          </span>
          </div>
          <form autoComplete="off">
            <div className="form-group">
              <input className="form-control" type="email"
                placeholder="email" />
              <i className="icon_mail_alt">
              </i>
            </div>
            <div className="form-group">
              <div className="hideShowPassword-wrap" style={{ "position": "relative", display: "block", verticalAlign: "baseline", margin: "0px", }}>
                <input id="password" className="form-control hideShowPassword-field" type="password" id="password" placeholder="Password" style={{ margin: "0px", paddingRight: "51.1px", }} />
              </div>
              <i className="icon_lock_alt">
              </i>
            </div>
            <div className="clearfix add_bottom_15">
              <div className="checkboxes float-left">
                <label className="container_check">
                  Remember me
                  <input type="checkbox"/>
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="float-right">
                <a id="forgot" href="#0">Forgot Password</a>
              </div>
            </div>
            <a className="btn_1 gradient full-width" href="#0">
              Login Now
            </a>
            <div className="text-center mt-2">
              <small>
              Don't have an acccount? 
              <strong>
                <a href="/Register">Sign Up</a>
              </strong>
              </small>
            </div>
          </form>
          <div className="copy">© 2021 Appetizr</div>
        
        </aside>
      </div>
      </div>
    </>

  );
};

export default Login;

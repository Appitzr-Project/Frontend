import React from 'react';
import { Helmet } from 'react-helmet';




const Register = () => {
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
            <img src="/assets/img/logo_sticky.svg" alt="" width="140" height="35"/>
          </a>
        </figure>
        <div className="access_social">
            <a className="social_bt facebook" href="#0">
            Register With Facebook</a>
            <a className="social_bt google" href="#0">
            Register With Google</a>
        </div>
        <div className="divider">
          <span>Or</span>
        </div>
        <form autoComplete="off">
            <div className="form-group">
              <input className="form-control" type="Name"
                placeholder="Name" />
              <i className="icon_pencil-edit">
              </i>
            </div>
            <div className="form-group">
              <input className="form-control" type="LastName"
                placeholder="Last Name" />
              <i className="icon_pencil-edit">
              </i>
            </div>
            <div className="form-group">
              <input className="form-control" type="Email"
                placeholder="Email" />
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
            <div className="form-group">
              <div className="hideShowPassword-wrap" style={{ "position": "relative", display: "block", verticalAlign: "baseline", margin: "0px", }}>
                <input id="password" className="form-control hideShowPassword-field" type="password" id="password" placeholder="Confirm Password" style={{ margin: "0px", paddingRight: "51.1px", }} />
              </div>
              <i className="icon_lock_alt">
              </i>
            </div>
            <div id="pass-info" className="clearfix">
            </div>
            <a className="btn_1 gradient full-width" href="#0">
              Register Now!
            </a>
            <div className="text-center mt-2">
              <small>
              Already have an acccount?  
              <strong>
                <a href="/Login">Sign In</a>
              </strong>
              </small>
            </div>
        </form>
        <div className="copy">© 2021 Appetizr</div>
      </aside>
    </div>
    </div>
    </>
  )
}

export default Register;

import React from 'react';
import Helmet from 'react-helmet';
import { useDispatch } from 'react-redux'
import { customSignInAction , signInAction } from '../../redux/actions/auth.action';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [form, setForm] = useState({
    username: '',
    password: ''
  })

  const onLoginFB = () => {
    dispatch(customSignInAction('Facebook'))
  }

  const onLoginGoogle = () => {
    dispatch(customSignInAction('Google'))
  }

  const handleFieldEmail = (e) => {
    setForm({ ...form , username: e.target.value })
  }

  const handleFieldPassword = (e) => {
    setForm({ ...form , password: e.target.value })
  }

  const onClickLoginNow = (e) => {
    dispatch(signInAction(form.username, form.password))
    .then(() => {
      history.push('/')
    })
    .catch(err => {
      alert(err.message)
    })

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
              <a onClick={onLoginGoogle} className="social_bt google" href="#0">
                Login With Google</a>
            </div>
            <div className="divider">
              <span>
                Or
          </span>
            </div>
            <form autoComplete="off">
              <div className="form-group">
                <input 
                  className="form-control" 
                  type="email"
                  placeholder="email"
                  onChange={handleFieldEmail} />
                <i className="icon_mail_alt">
                </i>
              </div>
              <div className="form-group">
                <div className="hideShowPassword-wrap" style={{ "position": "relative", display: "block", verticalAlign: "baseline", margin: "0px", }}>
                  <input id="password" 
                  onChange={handleFieldPassword}
                  className="form-control hideShowPassword-field" 
                  type="password" id="password" placeholder="Password" style={{ margin: "0px", paddingRight: "51.1px", }} />
                </div>
                <i className="icon_lock_alt">
                </i>
              </div>
              <div className="clearfix add_bottom_15">
                <div className="checkboxes float-left">
                  <label className="container_check">
                    Remember me
                  <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="float-right">
                  <a id="forgot" href="#0">Forgot Password</a>
                </div>
              </div>
              <a onClick={onClickLoginNow} className="btn_1 gradient full-width" href="#0">
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

import React from 'react';
import { useDispatch } from 'react-redux';
import { customSignInAction, signInAction, getCurrentUserAction } from '../../redux/actions/auth.action';
import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import LogoSticky from 'assets/img/logo_sticky.svg';
import 'assets/css/order-sign_up.css';
import { useEffect } from 'react';

const Login = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [form, setForm] = useState({
    username: '',
    password: ''
  })
  const [states, setState] = useState({
    isLoading: false
  })

  useEffect(() => {
    getCurrentUserAction()
  }, [])

  const onLoginFB = () => {
    dispatch(customSignInAction('Facebook'))
  }

  const onLoginGoogle = () => {
    dispatch(customSignInAction('Google'))
  }

  const handleFieldEmail = (e) => {
    setForm({ ...form, username: e.target.value })
  }

  const handleFieldPassword = (e) => {
    setForm({ ...form, password: e.target.value })
  }

  const onClickLoginNow = (e) => {
    setState({ isLoading: true })
    dispatch(signInAction(form.username, form.password))
      .then(() => {
        setState({ isLoading: false })
        history.push('/')
      })
      .catch(err => {
        setState({ isLoading: false })
        alert(err.message)
      })

  }

  return (
    <>
      <div id="register_bg">
        <div id="register">
          <aside>
            <figure>
              <Link to='/'>
                <img src={LogoSticky} alt="" width="140"></img>
              </Link>
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
              <button onClick={onClickLoginNow} className="btn_1 gradient full-width" disabled={states.isLoading} >
                {states.isLoading ? 'Loading...' : 'Login Now'}
              </button>
              <div className="text-center mt-2">
                <small>
                  Don't have an acccount? <strong><Link to="/register">Sign Up</Link></strong>
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

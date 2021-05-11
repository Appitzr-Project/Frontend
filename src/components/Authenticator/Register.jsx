import React from 'react';
import {useDispatch} from 'react-redux'
import { customSignInAction , signUpAction } from '../../redux/actions/auth.action';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import LogoSticky1 from 'assets/img/logo_sticky1.jpeg';
import 'assets/css/order-sign_up.css';

const Register = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [form, setForm] = useState({
    username: '-' ,
    password: '',
    attributes: {
        email : ''
    }  
  })

  const [states , setState ] = useState({
    isLoading: false
  })

  const onLoginFB = () => {
    dispatch(customSignInAction('Facebook'))
  }

  const onLoginGoogle = () => {
    dispatch(customSignInAction('Google'))
  }

  const handleFieldEmail = (e) => {
    setForm({ ...form , attributes:{ email: e.target.value }})
  }

  const handleFieldPassword = (e) => {
    setForm({ ...form , password: e.target.value })
  }

  const handleFieldConfirmPassword = (e) => {
    setForm({ ...form , confirm_password: e.target.value })
  }

  const onClickRegisterNow = (e) => {
    if(form.password === form.confirm_password){
      setState({ isLoading : true })
      dispatch(signUpAction({ ...form , username: form.attributes.email }))
      .then(() => {
        setState({ isLoading : false })
        history.push('/')
      })
      .catch(err => {
        setState({ isLoading : false })
        alert(err.message)
      })
    }else{
      alert('Please, Enter field confirm password correctly !')
    }

  }

  return (
    <>
    <div id="register_bg">
    <div id="register">
      <aside>
        <figure>
          <a href="index.html">
            <img src={LogoSticky1} alt="" width="140" />
          </a>
        </figure>
        <div className="access_social">
            <a onClick={onLoginFB} className="social_bt facebook" href="#0">
            Register With Facebook</a>
            <a onClick={onLoginGoogle} className="social_bt google" href="#0">
            Register With Google</a>
        </div>
        <div className="divider">
          <span>Or</span>
        </div>
        <form autoComplete="off">
            <div className="form-group">
              <input className="form-control" type="Email"
                placeholder="Email" onChange={handleFieldEmail} />
              <i className="icon_mail_alt">
              </i>
            </div>
            <div className="form-group">
              <div className="hideShowPassword-wrap" style={{ "position": "relative", display: "block", verticalAlign: "baseline", margin: "0px", }}>
                <input id="password" className="form-control hideShowPassword-field" type="password" id="password" placeholder="Password"
                onChange={handleFieldPassword} style={{ margin: "0px", paddingRight: "51.1px", }} />
              </div>
              <i className="icon_lock_alt">
              </i>
            </div>
            <div className="form-group">
              <div className="hideShowPassword-wrap" style={{ "position": "relative", display: "block", verticalAlign: "baseline", margin: "0px", }}>
                <input id="password" className="form-control hideShowPassword-field" type="password" id="password" placeholder="Confirm Password" 
                onChange={handleFieldConfirmPassword} style={{ margin: "0px", paddingRight: "51.1px", }} />
              </div>
              <i className="icon_lock_alt">
              </i>
            </div>
            <div id="pass-info" className="clearfix">
            </div>
            <button onClick={onClickRegisterNow} className="btn_1 gradient full-width" disabled={states.isLoading} >
              { states.isLoading ? 'Loading...' : 'Register Now!' } 
            </button>
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

import { useState } from "react"
import { signInAction } from "../../../redux/actions/auth.action"
import { useDispatch } from "react-redux"

const FormLogin = () => {

    const dispatch = useDispatch()
  
    const [form, setForm] = useState({
        username: '',
        password: ''
      })

    const onChange = name => ev => {
        setForm({
            ...form,
            [name]: ev.target.value
        })
    }

    const onLogin = (ev) => {
    ev.preventDefault()
    
        dispatch(signInAction(form.username, form.password))
        .then(() => {
            
        })
        .catch(err => {
            
        })
    
    }
    

    return(<div id="sign-in-dialog" className="zoom-anim-dialog mfp-hide">
        <div className="modal_header">
          <h3>Sign In</h3>
        </div>
        <form onSubmit={onLogin } >
          <div className="sign-in-wrapper">
            <a href="#0" className="social_bt facebook">Login with Facebook</a>
            <a href="#0" className="social_bt google">Login with Google</a>
            <div className="divider"><span>Or</span></div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" onChange={onChange('username') } name="email" id="email" />
              <i className="icon_mail_alt"></i>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" onChange={onChange('password') } name="password" id="password" value="" />
              <i className="icon_lock_alt"></i>
            </div>
            <div className="clearfix add_bottom_15">
              <div className="checkboxes float-left">
                <label className="container_check">Remember me
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="float-right"><a id="forgot" href="javascript:void(0);">Forgot Password?</a></div>
            </div>
            <div className="text-center">
              <input type="submit" value="Log In" className="btn_1 full-width mb_5" />
          Don’t have an account? <a href="account.html">Sign up</a>
            </div>
            <div id="forgot_pw">
              <div className="form-group">
                <label>Please confirm login email below</label>
                <input type="email" className="form-control" name="email_forgot" id="email_forgot" />
                <i className="icon_mail_alt"></i>
              </div>
              <p>You will receive an email containing a link allowing you to reset your password to a new preferred one.</p>
              <div className="text-center"><input type="submit" value="Reset Password" className="btn_1" /></div>
            </div>
          </div>
        </form>
      </div>

    )
}

export default FormLogin
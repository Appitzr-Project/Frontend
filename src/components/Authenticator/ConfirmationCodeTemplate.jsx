import { Card, InputGroup,Button, Form,Spinner} from "react-bootstrap"
import { VpnKey, PersonOutline } from '@material-ui/icons'
import { useState } from "react";
import { useDispatch} from 'react-redux'
import { confirmSignUpAction, resendConfirmationCodeAction } from '../../redux/actions/auth.action';
import { useHistory, useLocation,Link } from 'react-router-dom'
import Helmet from 'react-helmet';


const ConfirmationCode = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()
    const [validated, setValidated] = useState(false);
    const [form, setForm] = useState({
      username: (location.state && location.state.username) || '' ,
      code: ''
    })
    const [states, setStates] = useState({
      errorUsername: null,
      errorCode: null,
      errorLogin: null,
      isLoading: false
    })
    
    const onChangeForm = name => ev => {
      setForm({
        ...form,
        [name]: ev.target.value
      })
      setStates({ ...states, errorUsername: null, errorCode: null })
    }

    const onConfirmation = (ev) => {
        ev.preventDefault()
        const formValidation = ev.currentTarget;
        if (formValidation.checkValidity() === false) {
            ev.preventDefault();
            ev.stopPropagation();
            }
            if (validationState()) {
                setStates({ isLoading : true })
                dispatch(confirmSignUpAction(form))
                  .then(() => {
                    setStates({ isLoading : false })
                    history.push('/login')
                  })
                  .catch(err => {
                    setStates({ isLoading : false })
                    alert(err.message)
                  })
              }
        setValidated(true)
      }

    const validationState = () => {
    setStates({
        ...states,
        errorUsername: form.username === '' ? 'This field is required ' : null,
        errorCode: form.code === '' ? 'This field is required ' : null
      })
      return form.username !== '' && form.code !== '' 
    }

    const renderLoading = () => (
        <Spinner animation="border" role="status"></Spinner>
   )

   const resendCode = (ev) => {
    ev.preventDefault()
    setStates({ isLoading : true })
    dispatch(resendConfirmationCodeAction(form.username))
    .then(() => setStates({ isLoading : false}))
    .catch((err) => {
        setStates({ isLoading : false })
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
                <img src="assets/img/logo_sticky1.jpeg" alt="" width="140" ></img>

              </a>
            </figure>
            <div className="main_title center text-center">
                    <h2>Apply your confirmation code</h2>
            </div>
            <div className="divider">
          
            </div>
            <Form noValidate validated={validated} onSubmit={onConfirmation}>
                <Form.Row>
                    <Form.Group controlId="validationCustomUsername" className="mt-3">
                    <InputGroup hasValidation>
                        <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroupPrepend"><PersonOutline /></InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                        type="text"
                        placeholder="Username"
                        aria-describedby="inputGroupPrepend"
                        required
                        value={form.username}
                        onChange={onChangeForm('username')}
                        />
                        <Form.Control.Feedback type="invalid">
                        This field is required
                        </Form.Control.Feedback>
                    </InputGroup>
                    </Form.Group>
                    <Form.Group  controlId="validationCustomConfirmationCode" className="mt-3">
                    <InputGroup hasValidation>
                        <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroupPrepend"><VpnKey /></InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                        type="text"
                        placeholder="Confirmation Code"
                        aria-describedby="inputGroupPrepend"
                        required
                        onChange={onChangeForm('code')}
                        />
                        <Form.Control.Feedback type="invalid">
                        This field is required
                        </Form.Control.Feedback>
                    </InputGroup>
                    </Form.Group>
                </Form.Row>
                <div className="d-flex flex-row">
                <Link href="/confirmation-code" onClick={resendCode}className="mt-3" >
                  Resend code
                </Link>  
                </div>
                <Button type="submit" className="mt-3" variant= "danger" style={{width:'100%'}}>{states.isLoading ? renderLoading() : "Confirmation"}</Button>
            </Form>
            <div className="copy">© 2021 Appetizr</div>

          </aside>
        </div>
      </div>
</>
    )
}
export default ConfirmationCode
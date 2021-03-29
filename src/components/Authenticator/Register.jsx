import React from 'react';
import Wrapper from '../shared/Wrapper';
import { Grid, Typography, FormControl, Input, InputAdornment, Button, IconButton, FormHelperText, CircularProgress, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { LockOutlined, Visibility, VisibilityOff, ArrowForward , MailOutline } from '@material-ui/icons'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { customSignInAction, signUpAction } from '../../redux/actions/auth.action';
import { Link, useHistory } from 'react-router-dom'
import { useStyle } from './RegisterStyle'

const Register = () => {
  const classes = useStyle()
  const dispatch = useDispatch()
  const history = useHistory()
  const [form, setForm] = useState({
    username: '-' ,
    password: '',
    attributes: {
        email : ''     
    }
})
  const [states, setStates] = useState({
    showPassword: false,
    errorUsername: null,
    errorEmail: null,
    errorPassword: null,
    errorLogin: null,
    errorReEnterPassword: null,
    reEnterPassword: null,
    isLoading: false
  })

  const setLoading = (isLoad) => setStates({ ...states, isLoading: isLoad })
  const setErrorLogin = (errorLogin) => setStates({ ...states, errorLogin, isLoading: false })

  const onChangeForm = name => ev => {
    setForm({
      ...form,
      [name]: ev.target.value
    })
    setStates({ ...states, errorUsername: null, errorPassword: null })
  }

  const onChangeFormAttribute = name => ev => {
    setForm({
      ...form,
      attributes: { [name]: ev.target.value }
    })
    setStates({ ...states, errorUsername: null, errorPassword: null })
  }

  const onLogin = (ev) => {
    ev.preventDefault()
    
    if (validationState()) {
      setLoading(true)
      dispatch(signUpAction({ ...form , username: form.attributes.email }))
        .then(() => {
          setLoading(false)
          history.push('/confirmation-code', { username: form.attributes.email })
        })
        .catch(err => {
          setErrorLogin(err.message)
        })
    }
  }

  const validationState = () => {
    setStates({
      ...states,
      errorUsername: form.username === '' ? 'This field is required ' : null,
      errorEmail: form.attributes.email === '' ? 'This field is required ' : null,
      errorReEnterPassword: states.reEnterPassword === '' ? 'This field is required ' : 
                              form.password !== states.reEnterPassword ? 'Password incorrect' : null,
      errorPassword: form.password === '' ? 'This field is required ' : null
    })
    return (form.username !== '' && form.password !== '' && form.attributes.email !== '' && states.reEnterPassword !== ''
            && states.reEnterPassword === form.password )
  }

  const onLoginFB = () => {
    dispatch(customSignInAction('Facebook'))
  }

  const onLoginGoogle = () => {
    dispatch(customSignInAction('Google'))
  }


  const handleClickShowPassword = () => {
    setStates({ ...states, showPassword: !states.showPassword });
  }

  const handleMouseDownPassword = (ev) => (
    ev.preventDefault()
  )

  const renderSnackbar = () => (
    <Snackbar open={states.errorLogin !== null} anchorOrigin={{ vertical: 'top' , horizontal: 'center' }} autoHideDuration={6000} onClose={() => setErrorLogin(null)}>
      <Alert elevation={6} variant="filled" onClose={() => setErrorLogin(null)} severity="error" >
        {states.errorLogin}
      </Alert>
    </Snackbar>
  )

  // const renderFieldUsername = () => (
  //   <Grid container item  justify='center' xs md={8} >
  //     <FormControl fullWidth className={classes.fieldText + ' ' + classes.fieldUsername } >
  //       <Input
  //         error={states.errorUsername ? true : false}
  //         fullWidth
  //         startAdornment={
  //           <InputAdornment position="start">
  //             <PersonOutline />
  //           </InputAdornment>
  //         }
  //         onChange={onChangeForm('username')}
  //       />
  //       {(states.errorUsername && <FormHelperText error >{states.errorUsername}</FormHelperText>) || ''}
  //     </FormControl>
  //   </Grid>
  // )

  const renderFieldEmail = () => (
    <Grid container item justify='center' xs md={8} >
      <FormControl fullWidth className={classes.fieldText} >
        <Input
          error={states.errorEmail ? true : false}
          fullWidth
          startAdornment={
            <InputAdornment position="start">
              <MailOutline />
            </InputAdornment>
          }
          placeholder="Enter Email"
          onChange={onChangeFormAttribute('email')}
        />
        {(states.errorEmail && <FormHelperText error >{states.errorEmail}</FormHelperText>) || ''}
      </FormControl>
    </Grid>
  )

  const renderFieldPassword = () => (
    <Grid container item justify='center' xs md={8} >
      <FormControl fullWidth className={classes.fieldText} >
        <Input
          error={states.errorPassword ? true : false}
          fullWidth          
          type={states.showPassword ? 'text' : 'password'}
          placeholder="Enter Password"
          startAdornment={
            <InputAdornment position="start">
              <LockOutlined />
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {states.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          onChange={onChangeForm('password')}
        />
        {(states.errorPassword && <FormHelperText error >{states.errorPassword}</FormHelperText>) || ''}
      </FormControl>
    </Grid>

  )

  const renderFieldRePassword = () => (
    <Grid container item justify='center' xs md={8} >
      <FormControl fullWidth className={classes.fieldText} >
        <Input
          error={states.errorReEnterPassword ? true : false}
          fullWidth
          type={states.showPassword ? 'text' : 'password'}
          placeholder="Re enter Password"
          startAdornment={
            <InputAdornment position="start">
              <LockOutlined />
            </InputAdornment>
          }
          onChange={({ target }) => setStates({ ...states , reEnterPassword : target.value }) }
        />
        {(states.errorReEnterPassword && <FormHelperText error >{states.errorReEnterPassword}</FormHelperText>) || ''}
      </FormControl>
    </Grid>

  )


  const renderButtonRegister = () => (
    <Grid container item direction='column' alignItems='center' justify='center' xs md={8} >
      <Button type='submit' fullWidth variant="contained" color="primary"
        classes={{
          root: classes.buttonRegister,
          label: classes.buttonLabelRegister
        }} >
        <span>Register</span>
        {states.isLoading ? <CircularProgress /> : <ArrowForward />}
      </Button>
    </Grid>
  )

  return (
    <>
      <Wrapper
        title='Apptizr'
        textCenter={true}
        isBack='/login'
      >
        <form onSubmit={onLogin}>
          <Grid container direction='column' justify='center' alignItems='center' >
            <Grid item xsmd={8} >
              <Typography variant='h4' align='center' >Create your account</Typography>
              <Typography variant='body2'  align='center' className={classes.subtitle} >Register using your prefered social account</Typography>
            </Grid>

            <Grid container item alignItems='center' spacing={2} justify='center' xs md={8} >
              <Button fullWidth  variant="contained" color="primary" onClick={onLoginFB}
                className={classes.buttonLoginFB} >
                Facebook
              </Button>
              &nbsp;&nbsp;
              <Button fullWidth variant="contained" color="primary" onClick={onLoginGoogle}
                className={classes.buttonLoginGoogle} >
                Google
              </Button>
            </Grid>
            <Grid item xsmd={8} >
              <br />
              <Typography variant='h6' align='center' >OR</Typography>
            </Grid>
            {/* {renderFieldUsername()} */}
            {renderFieldEmail()}
            {renderFieldPassword()}
            {renderFieldRePassword()}
            {renderButtonRegister()}
            <Grid container direction='column' item justify='center' xs md={8} >
              <Typography align='center'  >
                Already have an account? <Link to='/login' >Sign in</Link>
              </Typography>
            </Grid>                    
          </Grid>
        </form>
        {renderSnackbar()}
      </Wrapper>

    </>
  );
};

export default Register;

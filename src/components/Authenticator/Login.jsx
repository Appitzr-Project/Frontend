import React from 'react';
import Wrapper from '../shared/Wrapper';
import { Grid, Typography, FormControl, Input, InputAdornment, Button, IconButton, FormHelperText, CircularProgress, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { PersonOutline, LockOutlined, Visibility, VisibilityOff, ArrowForward } from '@material-ui/icons'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { signInAction, customSignInAction } from '../../redux/actions/auth.action';
import { Link, useHistory } from 'react-router-dom'
import { useStyle } from './LoginStyle'

const Login = () => {
  const classes = useStyle()
  const dispatch = useDispatch()
  const history = useHistory()
  const [form, setForm] = useState({
    username: '',
    password: ''
  })
  const [states, setStates] = useState({
    showPassword: false,
    errorUsername: null,
    errorPassword: null,
    errorLogin: null,
    isLoading: false
  })

  const setLoading = (isLoad) => setStates({ ...states, isLoading: isLoad })
  const setErrorLogin = (errorLogin) => setStates({ ...states, errorLogin, isLoading: false })

  const onChange = name => ev => {
    setForm({
      ...form,
      [name]: ev.target.value
    })
    setStates({ ...states, errorUsername: null, errorPassword: null })
  }

  const onLogin = (ev) => {
    ev.preventDefault()
    if (validationState()) {
      setLoading(true)
      dispatch(signInAction(form.username, form.password))
        .then(() => {
          setLoading(false)
          history.push('/')
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
      errorPassword: form.password === '' ? 'This field is required ' : null
    })
    return form.username !== '' && form.password !== ''
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
      <Alert elevation={6} variant="filled"  onClose={() => setErrorLogin(null)} severity="error" >
        {states.errorLogin}
      </Alert>
    </Snackbar>
  )

  const renderFieldUsername = () => (
    <Grid container item justify='center' xs md={8} >
      <FormControl fullWidth className={classes.fieldText} >
        <Input
          error={states.errorUsername ? true : false}
          fullWidth
          startAdornment={
            <InputAdornment position="start">
              <PersonOutline />
            </InputAdornment>
          }
          onChange={onChange('username')}
        />
        {(states.errorUsername && <FormHelperText error >{states.errorUsername}</FormHelperText>) || ''}
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
          onChange={onChange('password')}
        />
        {(states.errorPassword && <FormHelperText error >{states.errorPassword}</FormHelperText>) || ''}
      </FormControl>
    </Grid>

  )

  const renderButtonLogin = () => (
    <Grid container item direction='column' alignItems='center' justify='center' xs md={8} >
      <Button type='submit' fullWidth variant="contained" color="primary"
        classes={{
          root: classes.buttonLogin,
          label: classes.buttonLabelLogin
        }} >
        <span>LOGIN</span>
        {states.isLoading ? <CircularProgress /> : <ArrowForward />}
      </Button>
    </Grid>
  )

  return (
    <>
      <Wrapper
        title='Apptizr'
        textCenter={true}
      >
        <form onSubmit={onLogin}>
          <Grid container direction='column' justify='center' alignItems='center' >
            <Grid item xsmd={8} >
              <Typography variant='h4' align='center' >Login</Typography>
            </Grid>
            {renderFieldUsername()}
            {renderFieldPassword()}
            {renderButtonLogin()}
            <Grid container direction='column' item justify='center' xs md={8} >
              <Typography align='right'  >
                <Link to='/forgot-password' >Forgot your password?</Link>
              </Typography>
              <Typography align='center' >
                OR
              </Typography>
            </Grid>

            <Grid container item direction='column' alignItems='center' justify='center' xs md={8} >
              <Button fullWidth variant="contained" color="primary" onClick={onLoginFB}
                className={classes.buttonLoginFB} >
                Login With Facebook
              </Button>
            </Grid>

            <Grid container item direction='column' alignItems='center' justify='center' xs md={8} >
              <Button fullWidth variant="contained" color="primary" onClick={onLoginGoogle}
                className={classes.buttonLoginGoogle} >
                Login With Google
              </Button>
            </Grid>
            <br />
            <Grid container direction='column' item justify='center' xs md={8} >
              <Typography align='center'  >
                Need an account? <Link to='/register' >Sign up</Link>
              </Typography>
            </Grid>

          </Grid>
        </form>
        {renderSnackbar()}
      </Wrapper>

    </>
  );
};

export default Login;

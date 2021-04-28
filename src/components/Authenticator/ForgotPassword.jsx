import React from 'react';
import Wrapper from '../shared/Wrapper';
import { Grid, Typography, FormControl, Input, InputAdornment, Button, FormHelperText, CircularProgress, Snackbar, Link, IconButton } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { PersonOutline, ArrowForward, VpnKey, LockOutlined, Visibility, VisibilityOff } from '@material-ui/icons'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { forgotPasswordAction, createNewPasswordAction } from '../../redux/actions/auth.action';
import { useHistory } from 'react-router-dom'
import { useStyle } from './ConfirmationCodeStyle'

const ForgotPassword = () => {
  const classes = useStyle()
  const dispatch = useDispatch()
  const history = useHistory()
  const [form, setForm] = useState({
    username: '',
    code: '',
    new_password: ''
  })
  const [states, setStates] = useState({
    errorUsername: null,
    errorCode: null,
    errorLogin: null,
    succesMsg: null,
    showPassword: false,
    errorReEnterPassword: null,
    reEnterPassword: null,
    isLoading: false
  })

  const setLoading = (isLoad) => setStates({ ...states, isLoading: isLoad })
  const setErrorLogin = (errorLogin) => setStates({ ...states, errorLogin, isLoading: false })
  const setSuccesMsg = (succesMsg) => setStates({ ...states, succesMsg , isLoading: false })

  const onChangeForm = name => ev => {
    setForm({
      ...form,
      [name]: ev.target.value
    })
    setStates({ ...states, errorUsername: null, errorCode: null })
  }

  const onConfirmation = (ev) => {
    ev.preventDefault()
    if (validationState()) {
      setLoading(true)
      dispatch(createNewPasswordAction(form))
        .then(() => {
          setLoading(false)
          history.push('/login')
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
      errorCode: form.code === '' ? 'This field is required ' : null,
      errorReEnterPassword: states.reEnterPassword === '' ? 'This field is required ' : 
                              form.new_password !== states.reEnterPassword ? 'Password incorrect' : null,
      errorPassword: form.password === '' ? 'This field is required ' : null
    })
    return form.username !== '' && form.code !== ''
  }

  const handleClickShowPassword = () => {
    setStates({ ...states, showPassword: !states.showPassword });
  }

  const handleMouseDownPassword = (ev) => (
    ev.preventDefault()
  )


  const renderSnackbarError = () => (
    <Snackbar open={states.errorLogin !== null} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} autoHideDuration={6000} onClose={() => setErrorLogin(null)}>
      <Alert elevation={6} variant="filled" onClose={() => setErrorLogin(null)} severity="error" >
        {states.errorLogin}
      </Alert>
    </Snackbar>
  )

  const renderSnackbarSuccess = () => (
    <Snackbar open={states.succesMsg !== null} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} autoHideDuration={6000} onClose={() => setErrorLogin(null)}>
      <Alert elevation={6} variant="filled" onClose={() => setSuccesMsg(null)} severity='success' >
        {states.succesMsg}
      </Alert>
    </Snackbar>
  )

  const renderFieldUsername = () => (
    <Grid container item justify='flex-end' xs md={8} >
      <FormControl fullWidth className={classes.fieldText + ' ' + classes.fieldUsername} >
        <Input
          error={states.errorUsername ? true : false}
          fullWidth
          startAdornment={
            <InputAdornment position="start">
              <PersonOutline />
            </InputAdornment>
          }
          placeholder='Enter Username'
          value={form.username}
          onChange={onChangeForm('username')}
        />
        {(states.errorUsername && <FormHelperText error >{states.errorUsername}</FormHelperText>) || ''}
      </FormControl>
      <Typography display='block' align='right'  >
        <Link href="/" onClick={resendCode} >
          Send code
        </Link>
      </Typography>
    </Grid>
  )

  const renderFieldCode = () => (
    <Grid container item justify='center' xs md={8} >
      <FormControl fullWidth className={classes.fieldText} >
        <Input
          fullWidth
          startAdornment={
            <InputAdornment position="start">
              <VpnKey />
            </InputAdornment>
          }
          placeholder='Enter Code'
          onChange={onChangeForm('code')}
        />
        {(states.errorCode && <FormHelperText error >{states.errorCode}</FormHelperText>) || ''}
      </FormControl>
    </Grid>

  )

  const renderButtonConfirmation = () => (
    <Grid container item direction='column' alignItems='center' justify='center' xs md={8} >
      <Button type='submit' fullWidth variant="contained" color="primary"
        classes={{
          root: classes.buttonConfirmation,
          label: classes.buttonLabelConfirmation
        }} >
        <span>Change Password</span>
        {states.isLoading ? <CircularProgress /> : <ArrowForward />}
      </Button>
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
          onChange={onChangeForm('new_password')}
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
          onChange={({ target }) => setStates({ ...states, reEnterPassword: target.value })}
        />
        {(states.errorReEnterPassword && <FormHelperText error >{states.errorReEnterPassword}</FormHelperText>) || ''}
      </FormControl>
    </Grid>

  )

  const resendCode = (ev) => {
    ev.preventDefault()
    setLoading(true)
    dispatch(forgotPasswordAction(form.username))
      .then(() => setSuccesMsg('Code Sent'))
      .catch((err) => {
        setLoading(false)
        setErrorLogin(err.message)
      })
  }

  return (
    <>
      <Wrapper
        title={`APPETIZR.CO`}
        textCenter={true}
        isBack='/login'
      >
        <form onSubmit={onConfirmation}>
          <Grid container direction='column' justify='center' alignItems='center' >
            <Grid item xsmd={8} >
              <Typography variant='h4' align='center' >Forgot Password</Typography>
            </Grid>
            {renderFieldUsername()}
            {renderFieldCode()}
            {renderFieldPassword()}
            {renderFieldRePassword()}
            {renderButtonConfirmation()}
          </Grid>
        </form>
        {renderSnackbarError()}
        {renderSnackbarSuccess()}
      </Wrapper>

    </>
  );
};

export default ForgotPassword;

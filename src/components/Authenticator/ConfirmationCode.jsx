import React from 'react';
import Wrapper from '../shared/Wrapper';
import { Grid, Typography, FormControl, Input, InputAdornment, Button, FormHelperText, CircularProgress, Snackbar , Link } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { PersonOutline, ArrowForward , VpnKey } from '@material-ui/icons'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { confirmSignUpAction, resendConfirmationCodeAction } from '../../redux/actions/auth.action';
import { useHistory, useLocation } from 'react-router-dom'
import { useStyle } from './ConfirmationCodeStyle'

const ConfirmationCode = () => {
  const classes = useStyle()
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()
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

  const setLoading = (isLoad) => setStates({ ...states, isLoading: isLoad })
  const setErrorLogin = (errorLogin) => setStates({ ...states, errorLogin, isLoading: false })

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
      dispatch(confirmSignUpAction(form))
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
      errorCode: form.code === '' ? 'This field is required ' : null
    })
    return form.username !== '' && form.code !== '' 
  }

  const renderSnackbarError = () => (
    <Snackbar open={states.errorLogin !== null}  anchorOrigin={{ vertical: 'top' , horizontal: 'center' }} autoHideDuration={6000} onClose={() => setErrorLogin(null)}>
      <Alert elevation={6} variant="filled" onClose={() => setErrorLogin(null)} severity="error" >
        {states.errorLogin}
      </Alert>
    </Snackbar>
  )

  const renderFieldUsername = () => (
    <Grid container item  justify='center' xs md={8} >
      <FormControl fullWidth className={classes.fieldText + ' ' + classes.fieldUsername } >
        <Input
          error={states.errorUsername ? true : false}
          fullWidth
          startAdornment={
            <InputAdornment position="start">
              <PersonOutline />
            </InputAdornment>
          }
          value={form.username}
          onChange={onChangeForm('username')}
        />
        {(states.errorUsername && <FormHelperText error >{states.errorUsername}</FormHelperText>) || ''}
      </FormControl>
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
        <span>Confirmation</span>
        {states.isLoading ? <CircularProgress /> : <ArrowForward />}
      </Button>
    </Grid>
  )

  const resendCode = (ev) => {
    ev.preventDefault()
    setLoading(true)
    dispatch(resendConfirmationCodeAction(form.username))
    .then(() => setLoading(false) )
    .catch((err) => {
      setLoading(false)
      setErrorLogin(err.message)
    })
  }

  return (
    <>
      <Wrapper
        title='Apptizr'
        textCenter={true}
      >
        <form onSubmit={onConfirmation}>
          <Grid container direction='column' justify='center' alignItems='center' >
            <Grid item xsmd={8} >
              <Typography variant='h4' align='center' >Confirmation Code</Typography>
            </Grid>
            {renderFieldUsername()}
            {renderFieldCode()}
            {renderButtonConfirmation()}
            
            <Grid container direction='column' item justify='center' xs md={8} >
              <Typography align='right'  >
                <Link href="/" onClick={resendCode} >
                  Resend code
                </Link>
              </Typography>
            </Grid>

          </Grid>
        </form>
        {renderSnackbarError()}
      </Wrapper>

    </>
  );
};

export default ConfirmationCode;

import React from "react";
import { TextField, Typography, Button, Grid, InputAdornment, FormHelperText, Snackbar, CircularProgress, Select, MenuItem, Input } from "@material-ui/core";
import { Alert } from '@material-ui/lab';
import Wrapper from "../../shared/Wrapper";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { useStyle } from './ProfileStyle'
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createVenueProfileAction, getVenueProfileAction, updateVenueProfileAction } from "../../../redux/actions/profile.action";
import { useEffect } from "react";
import { getCultureCategoryAction } from "../../../redux/actions/venue.action";
import { useHistory } from "react-router-dom";
import { getRefreshTokenAction } from "../../../redux/actions/auth.action";

const inputStyle = { fontSize: 21, padding: "5px 10px" }

const Profile = () => {
  const classes = useStyle();
  const dispatch = useDispatch()
  const history = useHistory()
  const { user: userState } = useSelector(state => state.auth)
  const idToken = userState.signInUserSession && userState.signInUserSession.idToken && userState.signInUserSession.idToken.jwtToken
  const [form, setForm] = useState({
    id: '',
    venueName: '',
    phoneNumber: userState.attributes.phone_number,
    postalCode: 0,
    mapLong: 0,
    mapLat: 0,
    bankBSB: '',
    bankName: '',
    bankAccountNo: '',
    address: '',
    cultureCategory: '',
    createdAt: ''
  })

  const [states, setStates] = useState({
    errorVenueName: null,
    errorPhoneNumber: null,
    errorPostalCode: null,
    errorLocation: null,
    errorBankBSB: null,
    errorBankName: null,
    errorBankAccountNo: null,
    errorAddress: null,
    errorCultureCategory: null,

    cultureCategories: [],
    errorSave: null,
    isLoading: false
  })

  const setLoading = (isLoad) => setStates({ ...states, isLoading: isLoad })
  const setErrorSave = (errorSave) => setStates({ ...states, errorSave, isLoading: false })

  useEffect(() => {
    getCurrentLocation()

    dispatch(getCultureCategoryAction(idToken))
      .then(res => {
        setStates({ ...states, cultureCategories: res.data })
      })
      .catch(err => {
        setErrorSave(err.message || 'An error occured')
      })

    dispatch(getVenueProfileAction(idToken))
      .then(res => {
        res.data && setForm(res.data)
      }).catch(() => false  )

   
  }, [])

  const onChange = name => ev => {
    setForm({
      ...form,
      [name]: ev.target.value
    })
    setStates({
      ...states,
      errorVenueName: null,
      errorPhoneNumber: null,
      errorPostalCode: null,
      errorLocation: null,
      errorBankBSB: null,
      errorBankName: null,
      errorBankAccountNo: null,
      errorAddress: null,
      errorCultureCategory: null
    })
  }

  const onSave = (ev) => {
    ev.preventDefault()
    if (validationState()) {
      setLoading(true)
      if(form.id)
        updateVenue()
      else
        createNewVenue()
    }
  }

  const createNewVenue = () => {
    dispatch(createVenueProfileAction(idToken, { ...form }))
      .then(() => {
        refreshTokenAction()
      })
      .catch(err => {
        setErrorSave(err.message || 'An error occured')
      })
  }

  const refreshTokenAction = () => {
    dispatch(getRefreshTokenAction())
    .then(() => {
      setLoading(false)
      history.push('/venue')
    }).catch(() => false  )    
  }

  const updateVenue = () => {
    dispatch(updateVenueProfileAction(idToken, { ...form }))
      .then(() => {
        setLoading(false)
        history.push('/venue')
      })
      .catch(err => {
        setErrorSave(err.message || 'An error occured')
      })
  }


  const validationState = () => {
    setStates({
      ...states,
      errorVenueName: !form.venueName ? 'This field is required ' : null,
      errorPhoneNumber: !form.phoneNumber || form.phoneNumber.length < 2 ? 'This field is required ' : null,
      errorPostalCode: !form.postalCode || form.postalCode.length < 2  ? 'This field is required ' : null,
      errorLocation: !form.mapLong || !form.mapLat ? 'This field is required ' : null,
      errorBankBSB: !form.bankBSB ? 'This field is required ' : null,
      errorBankName: !form.bankName ? 'This field is required ' : null,
      errorBankAccountNo: !form.bankAccountNo  ? 'This field is required ' : null,
      errorAddress: !form.address ? 'This field is required ' : null,
      errorCultureCategory: !form.cultureCategory ? 'This field is required ' : null,
    })
    const formValue = [form.venueName, form.phoneNumber, form.postalCode, form.mapLong, form.mapLat, form.bankBSB, form.bankName, form.bankAccountNo]
    return !formValue.includes('') && !formValue.includes(undefined) && !formValue.includes(0) && !formValue.includes('0')
  }

  const renderSnackbar = () => (
    <Snackbar open={states.errorSave !== null} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} autoHideDuration={6000} onClose={() => setErrorSave(null)}>
      <Alert elevation={6} variant="filled" onClose={() => setErrorSave(null)} severity="error" >
        {states.errorSave}
      </Alert>
    </Snackbar>
  )

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setForm({
        ...form,
        mapLong: position.coords.longitude,
        mapLat: position.coords.latitude
      })
    });
  }

  return (
    <>
      <Wrapper
        title="Profile"
        image="https://source.unsplash.com/random"
        isBack="/venue"
      >
        <form onSubmit={onSave} >
          <div className={classes.formControl}>
            <Typography className={classes.inputLabel}>Name</Typography>
            <TextField
              InputProps={{ style: inputStyle, className: classes.input, disableUnderline: true, }}
              variant="standard"
              fullWidth
              size="small"
              value={form.venueName}
              onChange={onChange('venueName')}
            />
            {(states.errorVenueName && <FormHelperText error >{states.errorVenueName}</FormHelperText>) || ''}
          </div>

          <div className={classes.formControl}>
            <Typography className={classes.inputLabel}>Email</Typography>
            <TextField
              InputProps={{ style: inputStyle, className: classes.input, disableUnderline: true, }}
              variant="standard"
              fullWidth
              size="small"
              value={userState.attributes && userState.attributes.email}
              readOnly
            />
          </div>

          <div className={classes.formControl}>
            <Typography className={classes.inputLabel}>Phone Number</Typography>
            <TextField
              InputProps={{ style: inputStyle, className: classes.input, disableUnderline: true, }}
              variant="standard"
              fullWidth
              size="small"
              value={form.phoneNumber}
              onChange={onChange('phoneNumber')}
            />
            {(states.errorPhoneNumber && <FormHelperText error >{states.errorPhoneNumber}</FormHelperText>) || ''}
          </div>

          <div className={classes.formControl}>
            <Typography className={classes.inputLabel}>Postal Code</Typography>
            <TextField
              type='number'
              InputProps={{ style: inputStyle, className: classes.input, disableUnderline: true, }}
              variant="standard"
              fullWidth
              size="small"
              value={form.postalCode}
              onChange={onChange('postalCode')}
            />
            {(states.errorPostalCode && <FormHelperText error >{states.errorPostalCode}</FormHelperText>) || ''}
          </div>

          <div className={classes.formControl}>
            <Typography className={classes.inputLabel}>Location</Typography>
            <TextField
              InputProps={{
                style: inputStyle, className: classes.input, disableUnderline: true, startAdornment: (
                  <InputAdornment position="start" component="div">
                    <div className={classes.startIcon} onClick={getCurrentLocation} >
                      <LocationOnIcon />
                    </div>
                  </InputAdornment>
                )
              }}
              variant="standard"
              fullWidth
              size="small"
              value={form.mapLong + ',' + form.mapLat}
            />
            {(states.errorLocation && <FormHelperText error >{states.errorLocation}</FormHelperText>) || ''}
          </div>

          <div className={classes.formControl}>
            <Typography className={classes.inputLabel}>Address</Typography>
            <TextField
              InputProps={{ style: inputStyle, className: classes.input, disableUnderline: true, }}
              variant="standard"
              fullWidth
              multiline
              rows={2}
              size="small"
              value={form.address}
              onChange={onChange('address')}
            />
            {(states.errorAddress && <FormHelperText error >{states.errorAddress}</FormHelperText>) || ''}
          </div>

          <div className={classes.formControl}>
            <Typography className={classes.inputLabel}>Culture Category</Typography>
            <Select
              value={form.cultureCategory}
              fullWidth
              variant='outlined'
              classes={{ root: classes.select }}
              input={
                <Input
                  disableUnderline
                  inputProps={{ style: inputStyle, className: classes.input }}
                />
              }
              onChange={onChange('cultureCategory')}
            >
              {states.cultureCategories.map(c => (
                <MenuItem value={c}>{c}</MenuItem>
              ))}
            </Select>
            {(states.errorCultureCategory && <FormHelperText error >{states.errorCultureCategory}</FormHelperText>) || ''}
          </div>

          <Typography
            style={{
              fontSize: "18px",
              fontWeight: " 600",
              margin: "33px 0 25px 0",
            }}
          >
            Bank Details
          </Typography>

          <div className={classes.formControl}>
            <Typography className={classes.inputLabel}>Bank BSB</Typography>
            <TextField
              InputProps={{ style: inputStyle, className: classes.input, disableUnderline: true, }}
              variant="standard"
              fullWidth
              size="small"
              value={form.bankBSB}
              onChange={onChange('bankBSB')}
            />
            {(states.errorBankBSB && <FormHelperText error >{states.errorBankBSB}</FormHelperText>) || ''}
          </div>

          <div className={classes.formControl}>
            <Typography className={classes.inputLabel}>Account Name</Typography>
            <TextField
              InputProps={{ style: inputStyle, className: classes.input, disableUnderline: true, }}
              variant="standard"
              fullWidth
              size="small"
              value={form.bankName}
              onChange={onChange('bankName')}
            />
            {(states.errorBankName && <FormHelperText error >{states.errorBankName}</FormHelperText>) || ''}
          </div>

          <div className={classes.formControl}>
            <Typography className={classes.inputLabel}>
              Account Number
            </Typography>
            <TextField
              InputProps={{ style: inputStyle, className: classes.input, disableUnderline: true, }}
              variant="standard"
              fullWidth
              size="small"
              value={form.bankAccountNo}
              onChange={onChange('bankAccountNo')}
            />
            {(states.errorBankAccountNo && <FormHelperText error >{states.errorBankAccountNo}</FormHelperText>) || ''}
          </div>

          <Grid container direction="column" alignItems="center" justify="center" className={classes.qrcode}>
            <Grid item>
              <img alt="mantap" src="/src/img/QRCODE.svg" />
            </Grid>
            <Grid item>
              <div className={classes.sendEmail}>
                Send to email
              </div>
            </Grid>
          </Grid>

          <Button
            type='submit'
            variant="outlined"
            className={classes.submitBtn}
            disableRipple
            fullWidth
          >
            {states.isLoading ? <CircularProgress /> : 'Submit'}
          </Button>
        </form>
        {renderSnackbar()}
      </Wrapper>
    </>
  );
};

export default Profile;

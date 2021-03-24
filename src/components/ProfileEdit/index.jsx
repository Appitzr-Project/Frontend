import React, { useEffect, useState } from 'react';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { useDispatch, useSelector } from 'react-redux';
import {
  getProfileAction,
  putProfileAction,
} from '../../redux/actions/profile.action';

const SubmitButton = withStyles(() => ({
  root: {
    color: 'white',
    backgroundColor: '#20D3C2',
    '&:hover': {
      backgroundColor: '#20D3C2',
    },
    width: '100%',
    height: '58px',
    fontSize: '18px',
    borderRadius: '18px',
    textTransform: 'capitalize',
    marginTop: '5px',
  },
}))(Button);

const CustomInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: '#F3F3F3',
    border: 'none',
    fontSize: 16,
    width: '100%',
    padding: '10px 12px',
    height: '27px',
    marginBottom: '26px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
  },
}))(InputBase);

const CustomLabel = withStyles(() => ({
  root: {
    color: '#464646',
  },
}))(InputLabel);

const CustomNavigateBeforeIcon = withStyles(() => ({
  root: {
    cursor: 'pointer',
  },
}))(NavigateBeforeIcon);

const useStyles = makeStyles({
  container: {
    background: 'linear-gradient(90deg, #5263C8 0%, #303C83 100%)',
    paddingLeft: '0px',
    paddingRight: '0px',
    paddingTop: '30px',
  },
  header: {
    paddingLeft: '24px',
    paddingRight: '24px',
  },
  backIcon: {
    color: '#ffffff',
    fontSize: '30px',
  },
  title: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '30px',
    color: '#ffffff',
  },
  content: {
    fontSize: '30px',
    marginTop: '50px',
  },
  profileBox: {
    background: '#ffffff',
    paddingLeft: '24px',
    paddingRight: '24px',
    paddingBottom: '24px',
    borderRadius: '50px 50px 0px 0px',
    boxShadow: 'none',
  },
  profileItem: {
    textAlign: 'left',
    marginTop: '46px',
    background: '#ffffff',
    paddingBottom: '32px',
  },
  profileTextWelcome: {
    fontSize: '16px',
    color: '#464646',
  },
  profileSectionTitle: {
    fontSize: '18px',
    marginBottom: '25px',
  },
});

const Profile = () => {
  const classes = useStyles();

  const jwtToken = useSelector(
    (state) => state.auth.user.signInUserSession.idToken.jwtToken
  );
  const profile = useSelector((state) => state.profile.profile.data);

  const putProfile = useSelector(
    (state) => state?.profile?.putProfile || state
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfileAction(jwtToken));
  }, [dispatch, jwtToken]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(putProfileAction(jwtToken, form));

    if (putProfile?.code === 200 && window) window.location.href = '/member';
  };

  const [form, setForm] = useState({
    memberName: profile.memberName,
    email: profile.email,
    mobileNumber: profile.mobileNumber,
  });

  const onChangeForm = (event) => {
    const { name, value } = event.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="App">
      <Container maxWidth="sm" className={classes.container}>
        <Grid container spacing={0} className={classes.header}>
          <Grid
            item
            xs={12}
            className={classes.title}
            alignItems="center"
            container
            justify="space-between"
          >
            <NavigateBeforeIcon
              className={classes.backIcon}
              onClick={() => (window ? window.history.back() : () => {})}
            />
            <span>Profile</span>
            <img alt="admin" src="/src/img/imgadmin.png" />
          </Grid>
        </Grid>

        <Grid container spacing={0}>
          <Grid item xs={12} className={classes.content}>
            <Grid container spacing={0} className={classes.profileBox}>
              <Grid item xs={12} className={classes.profileItem}>
                <form
                  className={classes.root}
                  noValidate
                  autoComplete="off"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <h5 className={classes.profileSectionTitle}>Details</h5>
                    <FormControl fullWidth>
                      <CustomLabel shrink htmlFor="bootstrap-input">
                        Name
                      </CustomLabel>
                      <CustomInput
                        id="memberName"
                        name="memberName"
                        value={form.memberName}
                        onChange={(e) => onChangeForm(e)}
                      />
                    </FormControl>
                    <FormControl fullWidth>
                      <CustomLabel shrink htmlFor="bootstrap-input">
                        Email
                      </CustomLabel>
                      <CustomInput
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={(e) => onChangeForm(e)}
                        disabled
                      />
                    </FormControl>
                    <FormControl fullWidth>
                      <CustomLabel shrink htmlFor="bootstrap-input">
                        Mobile
                      </CustomLabel>
                      <CustomInput
                        id="mobileNumber"
                        name="mobileNumber"
                        value={form.mobileNumber}
                        onChange={(e) => onChangeForm(e)}
                      />
                    </FormControl>
                  </div>
                  <div>
                    <h5 className={classes.profileSectionTitle}>Password</h5>
                    <FormControl fullWidth>
                      <CustomLabel shrink htmlFor="bootstrap-input">
                        Old Password
                      </CustomLabel>
                      <CustomInput
                        onChange={onChangeForm}
                        id="bootstrap-input"
                        disabled
                      />
                    </FormControl>
                    <FormControl fullWidth>
                      <CustomLabel shrink htmlFor="bootstrap-input">
                        New Password
                      </CustomLabel>
                      <CustomInput
                        onChange={onChangeForm}
                        id="bootstrap-input"
                        disabled
                      />
                    </FormControl>
                    <FormControl fullWidth>
                      <CustomLabel shrink htmlFor="bootstrap-input">
                        Confirm Password
                      </CustomLabel>
                      <CustomInput
                        onChange={onChangeForm}
                        id="bootstrap-input"
                        disabled
                      />
                    </FormControl>
                  </div>
                  <div>
                    <h5 className={classes.profileSectionTitle}>
                      Payment Details
                    </h5>
                    <FormControl fullWidth>
                      <CustomLabel shrink htmlFor="bootstrap-input">
                        Card Number
                      </CustomLabel>
                      <CustomInput
                        onChange={onChangeForm}
                        id="bootstrap-input"
                        disabled
                      />
                    </FormControl>
                    <FormControl fullWidth>
                      <CustomLabel shrink htmlFor="bootstrap-input">
                        Expiring Date
                      </CustomLabel>
                      <CustomInput
                        onChange={onChangeForm}
                        id="bootstrap-input"
                        disabled
                      />
                    </FormControl>
                    <FormControl fullWidth>
                      <CustomLabel shrink htmlFor="bootstrap-input">
                        CVV
                      </CustomLabel>
                      <CustomInput
                        onChange={onChangeForm}
                        id="bootstrap-input"
                        disabled
                      />
                    </FormControl>
                  </div>
                  <SubmitButton
                    type="submit"
                    variant="contained"
                    className={classes.profileSubmit}
                  >
                    Save Changes
                  </SubmitButton>
                </form>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Profile;

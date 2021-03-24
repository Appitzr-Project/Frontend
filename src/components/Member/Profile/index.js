import { Box, Card, Container, Grid, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getProfileAction,
  postProfileChange,
} from '../../../redux/actions/profile.action';
import BottomNav from '../../BottomNav';
import { MENU } from '../../BottomNav/const';
import NavBar from '../../NavBar';
import ContactsIcon from './assets/ic-contacts.svg';
import HistoryIcon from './assets/ic-history.svg';
import LogoutIcon from './assets/ic-logout.svg';
import ProfileIcon from './assets/ic-profile.svg';
import Pencils from './assets/pencils.svg';
import QRCodeIcon from './assets/qr-profile.svg';
import Placeholder from './assets/placeholder.svg';
import ConfirmationDialog from './components/ConfirmationDialog';

const useStyles = makeStyles({
  containerRoot: {
    background: 'linear-gradient(90deg, #5263C8 0%, #303C83 100%)',
  },
  cardRoot: {
    overflow: 'unset',
    padding: '24px 24px 57px 24px',
    marginTop: '24px',
    borderRadius: '50px 50px 0 0',
  },
  alignRight: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    alignItems: 'baseline',
  },
  profileGrid: {
    marginTop: '-75px',
    display: 'flex',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    alignItems: 'baseline',
  },
  desc: {
    color: '#878787',
  },
  pb30: {
    paddingBottom: '30px',
  },
  pb75: {
    paddingBottom: '75px',
  },
  centered: {
    margin: '0 auto',
  },
  selectFileBtnWrapper: {
    width: '35px',
    position: 'relative',
    display: 'inline-block',
  },
  inputRoot: {
    fontSize: '0.1px',
    position: 'absolute',
    left: '0',
    top: '0',
    opacity: '0',
    cursor: 'pointer',
    width: '100%',
    height: '100%',
  },
  inputFile: {
    fontSize: '0.1px',
    position: 'absolute',
    left: '0',
    top: '0',
    opacity: '0',
    cursor: 'pointer',
    width: '100%',
    height: '100%',
  },
  imgContainer: {
    width: '127px',
    height: '127px',
    borderRadius: '60px',
  },
  cursorPointer: {
    cursor: 'pointer',
  },
});

const MemberHome = () => {
  const classes = useStyles();
  const [displayDialog, setDisplayDialog] = useState(false);
  const handleOnClick = (target) => {
    if (window) window.location.href = target;
    return;
  };

  const jwtToken = useSelector(
    (state) => state.auth.user.signInUserSession.idToken.jwtToken
  );

  const email = useSelector(
    (state) => state.auth.user.signInUserSession.idToken.payload.email || ''
  );

  const dispatch = useDispatch();

  const [state, setState] = useState({
    profile: {
      memberName: '',
      email,
      mobileNumber: '(+61) ',
      profilePicture: Placeholder,
      isNew: true,
    },
  });

  console.log('state: ', state);
  useEffect(() => {
    if (state.profile.isNew) {
      dispatch(getProfileAction(jwtToken)).then((res) => {
        setState({ ...state, profile: { ...res.data, isNew: false } });
      });
    }
  }, [dispatch, jwtToken, state]);

  const handleChange = (e) => {
    const profilePicture = e.target.files[0];
    const formData = new FormData();
    formData.append('profilePicture', profilePicture);
    dispatch(postProfileChange(jwtToken, formData)).then((res) => {
      setState({
        ...state,
        profile: { ...state.profile, profilePicture: res.data.profilePicture },
      });
    });
  };

  return (
    <>
      <Container
        classes={{ root: classes.containerRoot }}
        maxWidth="sm"
        disableGutters
      >
        <NavBar title="" />
        <Card classes={{ root: classes.cardRoot }} elevation={0}>
          <Grid
            container
            spacing={2}
            className={classes.pb30}
            justify="space-between"
          >
            <Grid item xs>
              <Box fontSize={20} fontWeight={500}>
                My account
              </Box>
              <Box fontSize={14}>{state.profile.email}</Box>
            </Grid>
            <Grid item xs className={classes.profileGrid}>
              <div>
                <img
                  alt="profile"
                  src={state.profile.profilePicture || Placeholder}
                  className={classes.imgContainer}
                />
              </div>
            </Grid>
            <Grid item xs={1} className={classes.alignRight}>
              <div className={classes.selectFileBtnWrapper}>
                <img alt="edit" src={Pencils} />
                <input
                  type="file"
                  accept="image/png, image/jpeg"
                  className={classes.inputFile}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={3} className={classes.pb30}>
            <Grid item xs>
              <Box fontSize={14} className={classes.desc}>
                Hello, My Name is {state.profile.memberName}
              </Box>
            </Grid>
          </Grid>

          <Grid
            container
            alignItems="center"
            className={classes.pb30}
            onClick={() => handleOnClick('/member/profile-edit')}
          >
            <Grid item xs={1}>
              <img alt="edit" src={ProfileIcon} />
            </Grid>
            <Grid item xs>
              <Box fontSize={15} className={classes.cursorPointer}>
                Edit Profile
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            alignItems="center"
            className={classes.pb30}
            onClick={() => handleOnClick('/member/order/history')}
          >
            <Grid item xs={1}>
              <img alt="history" src={HistoryIcon} />
            </Grid>
            <Grid item xs>
              <Box fontSize={15} className={classes.cursorPointer}>
                History
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            alignItems="center"
            className={classes.pb30}
            onClick={() => handleOnClick('/member/contact/support')}
          >
            <Grid item xs={1}>
              <img alt="contact" src={ContactsIcon} />
            </Grid>
            <Grid item xs>
              <Box fontSize={15} className={classes.cursorPointer}>
                Contact Support
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            alignItems="center"
            className={classes.pb30}
            onClick={() => setDisplayDialog(true)}
          >
            <Grid item xs={1}>
              <img alt="contact" src={LogoutIcon} />
            </Grid>
            <Grid item xs>
              <Box fontSize={15} className={classes.cursorPointer}>
                Logout
              </Box>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item className={classes.centered}>
              <img alt="qr-code" src={QRCodeIcon} />
            </Grid>
          </Grid>
        </Card>

        <ConfirmationDialog
          id="ringtone-menu"
          keepMounted
          open={displayDialog}
          onClose={() => setDisplayDialog(false)}
        />

        <BottomNav ActiveMenu={MENU.USER} />
      </Container>
    </>
  );
};

export default MemberHome;

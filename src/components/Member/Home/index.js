import { Box, Card, Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import BottomNav from '../../BottomNav';
import { MENU } from '../../BottomNav/const';
import ContactsIcon from './assets/ic-contacts.svg';
import HistoryIcon from './assets/ic-history.svg';
import ProfileIcon from './assets/ic-profile.svg';
import BellSVG from './assets/ic-bell.svg';
import Profile from './assets/profile.png';
import QRCodeIcon from './assets/qr-profile.svg';

const useStyles = makeStyles({
  containerRoot: {
    background: 'linear-gradient(90deg, #5263C8 0%, #303C83 100%)',
  },
  cardRoot: {
    overflow: 'unset',
    padding: '24px 24px 100px 24px',
    marginTop: '24px',
    borderRadius: '50px 50px 0 0',
  },
  desc: {
    color: '#878787',
  },
  topContent: {
    padding: '55px 24px 35px',
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
});

const MemberHome = () => {
  const classes = useStyles();

  return (
    <>
      <Container
        classes={{ root: classes.containerRoot }}
        maxWidth="sm"
        disableGutters
      >
      <Grid container spacing={2} className={classes.topContent} justify="space-between">
        <Grid item xs>
          <div>
            <img alt="notification" src={BellSVG} />
          </div>
        </Grid>
        <Grid item xs>
          <div>
            <img alt="profile" src={Profile} />
          </div>
        </Grid>
      </Grid>
        <Grid container spacing={2} className={classes.topContent} justify="space-between">
          <Grid item xs>
           <Box>Hi John</Box>
          </Grid>
        </Grid>
        <Card classes={{ root: classes.cardRoot }} elevation={0}>
          <Grid container spacing={2} className={classes.pb30}>
            <Grid item xs>
              <Box fontSize={20} fontWeight={500}>
                My account
              </Box>
              <Box fontSize={14}>Tone_ross@hotmail.com</Box>
            </Grid>
            <Grid item xs>
              <div>
                <img alt="profile" src={Profile} />
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={3} className={classes.pb30}>
            <Grid item xs>
              <Box fontSize={14} className={classes.desc}>
                Hello, My Name is tone rose. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s,
              </Box>
            </Grid>
          </Grid>

          <Grid container alignItems="center" className={classes.pb30}>
            <Grid item xs={1}>
              <img alt="edit" src={ProfileIcon} />
            </Grid>
            <Grid item xs>
              <Box fontSize={15}>Edit Profile</Box>
            </Grid>
          </Grid>
          <Grid container alignItems="center" className={classes.pb30}>
            <Grid item xs={1}>
              <img alt="history" src={HistoryIcon} />
            </Grid>
            <Grid item xs>
              <Box fontSize={15}>History</Box>
            </Grid>
          </Grid>
          <Grid container alignItems="center" className={classes.pb30}>
            <Grid item xs={1}>
              <img alt="contact" src={ContactsIcon} />
            </Grid>
            <Grid item xs>
              <Box fontSize={15}>Contact Support</Box>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item className={classes.centered}>
              <img alt="qr-code" src={QRCodeIcon} />
            </Grid>
          </Grid>
        </Card>

        <BottomNav ActiveMenu={MENU.USER} />
      </Container>
    </>
  );
};

export default MemberHome;

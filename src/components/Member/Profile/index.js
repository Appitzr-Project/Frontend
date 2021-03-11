import { Box, Card, Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import BottomNav from '../../BottomNav';
import { MENU } from '../../BottomNav/const';
import NavBar from '../../NavBar';
import ContactsIcon from './assets/ic-contacts.svg';
import HistoryIcon from './assets/ic-history.svg';
import ProfileIcon from './assets/ic-profile.svg';
import Pencils from './assets/pencils.svg';
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
    height: 'calc(100vh - 70px)',
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
              <Box fontSize={14}>Tone_ross@hotmail.com</Box>
            </Grid>
            <Grid item xs className={classes.profileGrid}>
              <div>
                <img alt="profile" src={Profile} />
              </div>
            </Grid>
            <Grid item xs={1}  className={classes.alignRight}>
              <div>
                <img alt="edit" src={Pencils} />
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

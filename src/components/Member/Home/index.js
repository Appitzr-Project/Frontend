import {
  Box,
  Card,
  Container,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  IconButton,
  Hidden,
  AppBar,
  Toolbar,
  Typography,
  Button
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import BottomNav from '../../BottomNav';
import { MENU } from '../../BottomNav/const';
import BellSVG from './assets/ic-bell.svg';
import Profile from './assets/profile.png';
import headerAppetizr from './assets/header-appetizr.jpeg';
import ButtonSearch from './components/ButtonSearch';
import VenueCard from './components/VenueCard';
import VenueCarousel from './components/VenueCarousel';
import VenueSVG from './assets/venue.svg';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getAllVenueList } from "../../../redux/api/venue.api"

const useStyles = makeStyles({
  containerRoot: {
    background: 'linear-gradient(90deg, #5263C8 0%, #303C83 100%)',
  },
  cardRoot: {
    overflow: 'unset',
    padding: '33px 24px 150px 24px',
    marginTop: '24px',
    borderRadius: '50px 50px 0 0',
  },
  venueCardContainer: {
    flexWrap: 'nowrap',
    overflow: 'scroll',
  },
  venueCard: {
    background: '#FFFFFF',
    boxShadow: '0px 4px 4px rgba(71, 71, 71, 0.1)',
    borderRadius: '30px',
  },
  desc: {
    color: '#878787',
  },
  white: {
    color: '#FFFFFF',
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
  headerDesktop: {
    height: 'calc(100vh - 64px)',
    background: `url(${headerAppetizr})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
});



const MemberHome = () => {
  const auth = useSelector(state => state.auth);
  const [category, setCategory] = useState();
  const [urlVenue, setUrlVenue] = useState();
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    // const groupUser = auth.user.signInUserSession.idToken.payload['cognito:groups'];
    // if(auth.user && groupUser && groupUser.includes('venue')) {
    //   setUrlVenue('/venue');
    // } else {
    //   setUrlVenue('/venue/profile');
    // }
  }, [auth]);

  // api
  useEffect(() => {
    let isActive = true;
    const http = async () => {
      try {
        setLoading(true);
        const res = await getAllVenueList();
        if (isActive) {
          setItems(res.data);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
    http();
    return () => {
      isActive = false;
    }
  }, []);

  const renderAppBarMobile = (
    <Hidden smUp >
      <Grid
        container
        spacing={2}
        className={classes.topContent}
        justify="space-between"
        alignItems="center"
      >
        <Grid item xs>
          <div>
            <img alt="notification" src={BellSVG} />
          </div>
        </Grid>
        <Box pr="23px">
          <IconButton onClick={() => history.push(urlVenue)} >
            <img src={VenueSVG} alt="venue" />
          </IconButton>
        </Box>
        <Grid
          item
          onClick={() => (window ? (window.location.href = '/member') : {})}
        >
          <div>
            <img alt="profile" src={Profile} />
          </div>
        </Grid>
      </Grid>
    </Hidden>

  )

  const renderAppBarDesktop = (<Hidden xsDown ><>
    <AppBar position="static">
      <Toolbar >
        <Typography variant="h6" >
          Appetizr
            </Typography>
        <Grid item xs ></Grid>
        <Button color='inherit' >Login</Button>
      </Toolbar>
    </AppBar>
    <Grid container className={classes.headerDesktop } >
      adas
    </Grid>
  </></Hidden>)

  return !loading ? (
    <>
      <div
        className={classes.containerRoot}
      >
        {renderAppBarMobile }
        {renderAppBarDesktop }

        <Grid container>
          <Grid item xs>
            <Box
              p="0 24px 33px 24px"
              fontSize={26}
              fontWeight={600}
              className={classes.white}
            >
              Welcome
            </Box>
          </Grid>
        </Grid>

        <VenueCarousel items={items} />

        <Card classes={{ root: classes.cardRoot }} elevation={0}>
          <Box pb="16px">
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                labelId="category"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <MenuItem value="Asian">Asian</MenuItem>
                <MenuItem value="Australian">Australian</MenuItem>
                <MenuItem value="European">European</MenuItem>
                <MenuItem value="American">American</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <form noValidate autoComplete="off">
            <TextField
              fullWidth
              id="postalCode"
              label="Postal Codes"
              defaultValue="6283"
            />
            <ButtonSearch />
          </form>

          <Box>
            <VenueCard items={items} />
          </Box>

        </Card>
        <Hidden smUp >
          <BottomNav ActiveMenu={MENU.HOME} />
        </Hidden>
      </div>
    </>
  ) : "Loading...";
};

export default MemberHome;

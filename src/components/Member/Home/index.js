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
  IconButton
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import BottomNav from '../../BottomNav';
import { MENU } from '../../BottomNav/const';
import BellSVG from './assets/ic-bell.svg';
import Profile from './assets/profile.png';
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
});



const MemberHome = () => {
  const auth = useSelector(state => state.auth);
  const [category, setCategory] = useState();
  const [urlVenue, setUrlVenue] = useState();
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const classes = useStyles();
  const history = useHistory();

  useEffect( () => {
    const groupUser = auth.user.signInUserSession.idToken.payload['cognito:groups'];
    if(auth.user && groupUser && groupUser.includes('venue')) {
      setUrlVenue('/venue');
    } else {
      setUrlVenue('/venue/profile');
    }
  }, []);

  // api
  useEffect(() => {
    let isActive = true;
    const http = async () => {
      try {
        setLoading(true);
        const res = await getAllVenueList();
        if(isActive){
          console.log(res.data);
          setItems(res.data);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
    http();
    return () => {
      isActive=false;
    }
  },[]);

  return !loading && (
    <>
      <Container
        classes={{ root: classes.containerRoot }}
        maxWidth="sm"
        disableGutters
      >
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
          <IconButton onClick={() => history.push(urlVenue) } >
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
        <Grid container>
          <Grid item xs>
            <Box
              p="0 24px 33px 24px"
              fontSize={26}
              fontWeight={600}
              className={classes.white}
            >
              Hi jeff
            </Box>
          </Grid>
        </Grid>

        <VenueCarousel items={items}/>

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
        <BottomNav ActiveMenu={MENU.HOME} />
      </Container>
    </>
  );
};

export default MemberHome;

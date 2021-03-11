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
  TextField
} from '@material-ui/core';
import React, { useState } from 'react';
import BottomNav from '../../BottomNav';
import { MENU } from '../../BottomNav/const';
import BellSVG from './assets/ic-bell.svg';
import StarSVG from './assets/ic-star.svg';
import Profile from './assets/profile.png';
import VenuePNG from './assets/venue.png';
import ButtonSearch from './components/ButtonSearch';
import VenueCard from './components/VenueCard';

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
  const [category, setCategory] = useState();
  const classes = useStyles();

  return (
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
        >
          <Grid item xs>
            <div>
              <img alt="notification" src={BellSVG} />
            </div>
          </Grid>
          <Grid item>
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
              Hi John
            </Box>
          </Grid>
        </Grid>
        <Grid container className={classes.venueCardContainer}>
          {Array.from({ length: 10 }).map((i, index) => (
            <Grid item>
              <Box
                p="0 0 21px 0"
                pl={index === 0 ? '24px' : '18px'}
                pr={
                  index === Array.from({ length: 10 }).length - 1 ? '24px' : '0'
                }
                borderRadius={30}
              >
                <Card classes={{ root: classes.venueCard }}>
                  <img alt="venue" src={VenuePNG} />
                  <Box
                    ml="21px"
                    fontSize={14}
                    fontWeight={600}
                    pb="5px"
                    color="#7B00AB"
                  >
                    Restaurant Hubert
                  </Box>
                  <Box
                    ml="21px"
                    fontWeight={700}
                    fontSize={16}
                    pb="5px"
                    color="#0E0E0E"
                  >
                    $$$ French
                  </Box>
                  <Box ml="21px" fontSize={12} color="#59495F" pb="7px">
                    Dine-in | Takeaway
                  </Box>
                  <Grid container justify="space-between" alignItems="center">
                    <Grid item>
                      <Box
                        ml="21px"
                        mb="14px"
                        fontWeight={600}
                        fontSize={12}
                        color="#0E0E0E"
                      >
                        Sydney NSW
                      </Box>
                    </Grid>
                    <Grid item>
                      <Box
                        mr="21px"
                        mb="14px"
                        fontWeight={600}
                        fontSize={16}
                        color="#5E4E63"
                      >
                        {Array.from({ length: 5 }).map((i) => (
                          <img alt="star" src={StarSVG} />
                        ))}
                      </Box>
                    </Grid>
                  </Grid>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
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
          </form>
          <Box pt="20px">
            <VenueCard />
          </Box>
        </Card>
        <ButtonSearch />
        <BottomNav ActiveMenu={MENU.HOME} />
      </Container>
    </>
  );
};

export default MemberHome;

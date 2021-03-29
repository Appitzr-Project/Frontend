import { Box, Card, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import StarSVG from '../assets/ic-star.svg';
import VenuePNG from '../assets/venue.png';

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

const VenueCarousel = ({items}) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.venueCardContainer}>
      {items.map((item, index) => (
        <Grid item key={index}>
          <Box
            p="0 0 21px 0"
            pl={index === 0 ? '24px' : '18px'}
            pr={index === Array.from({ length: 10 }).length - 1 ? '24px' : '0'}
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
                {item.venueName}
              </Box>
              <Box
                ml="21px"
                fontWeight={700}
                fontSize={16}
                pb="5px"
                color="#0E0E0E"
              >
                {item.cultureCategory}
              </Box>
              <Grid container justify="space-between" alignItems="center">
                <Grid container item xs={8}>
                  <Box
                    ml="21px"
                    mb="14px"
                    pt="7px"
                    fontWeight={600}
                    fontSize={12}
                    color="#0E0E0E"
                  >
                    {item.address}
                  </Box>
                </Grid>
                <Grid container item xs={4}>
                  <Box
                    mb="14px"
                    ml="15px"
                    fontWeight={600}
                    fontSize={16}
                    color="#5E4E63"
                  >
                    {Array.from({ length: 5 }).map((i, index) => (
                      <img key={index} alt="star" width="17" src={StarSVG} />
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default VenueCarousel;

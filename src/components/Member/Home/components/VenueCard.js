import { Box, Card, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import HeartIcon from '../assets/heart.js';
import StarSVG from '../assets/ic-star.svg';
import VenueThumbnail from '../assets/venue-thumbnail.png';

const useStyles = (img) =>
  makeStyles({
    cardContainer: {
      boxShadow: '0px 4px 4px rgba(71, 71, 71, 0.1)',
      borderRadius: '15px',
    },
    gridContainer: {
      padding: '8px 8px 0 8px',
    },
    gridWrapper: {
      height: '100%',
    },
    alignRight: {
      display: 'flex',
      justifyContent: 'flex-end',
      flexWrap: 'wrap',
      alignItems: 'baseline',
    },
    menuWrapper: {
      backgroundImage: `url(${img})`,
      background: 'no-repeat',
    },
  });

const VenueCard = () => {
  const classes = useStyles(VenueThumbnail)();

  return (
    <Grid container spacing={0} direction="column">
      {Array.from({ length: 5 }).map((i, index) => (
        <Box pb="20px">
          <Grid item className={classes.gridWrapper}>
            <Card elevation={0} className={classes.cardContainer}>
              <Grid container className={classes.gridContainer}>
                <Grid item xs={3} className={classes.menuWrapper}>
                  <Box p={1}>
                    <HeartIcon color={index < 1 ? '#F1608A' : '#FFFFFF'} />
                  </Box>
                </Grid>
                <Grid item xs={8}>
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
                  <Grid container justify="space-between" alignItems="center" wrap="nowrap">
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
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Box>
      ))}
    </Grid>
  );
};

export default VenueCard;

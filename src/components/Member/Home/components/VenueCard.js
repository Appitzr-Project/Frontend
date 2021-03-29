import { Box, Card, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import HeartIcon from '../assets/heart.js';
import StarSVG from '../assets/ic-star.svg';
import VenueThumbnail from '../assets/venue-thumbnail.png';
import {Link} from "react-router-dom"

const useStyles = (img) =>
  makeStyles({
    cardContainer: {
      boxShadow: '0px 4px 4px rgba(71, 71, 71, 0.1)',
      borderRadius: '15px',
      padding: "15px 0"
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

const VenueCard = ({items}) => {
  const classes = useStyles(VenueThumbnail)();

  return (
    <Grid container spacing={0} direction="column">
      {items.map((item, index) => (
        <Link to={`/member/venue/${item.id}`} key={item.id}>
        <Box pb="20px">
          <Grid item className={classes.gridWrapper}>
            <Card elevation={0} className={classes.cardContainer}>
              <Grid container className={classes.gridContainer}>
                <Grid item xs={3} className={classes.menuWrapper}>
                  <Box p={1}>
                    <HeartIcon color={index < 1 ? '#F1608A' : '#FFFFFF'} />
                  </Box>
                </Grid>
                <Grid item xs={6}>
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
                    <Grid item>
                      <Box
                        ml="21px"
                        pt="7px"
                        fontWeight={600}
                        fontSize={12}
                        color="#0E0E0E"
                      >
                        {item.address}
                      </Box>
                    </Grid>
                </Grid>

                <Grid item xs={3} style={{display:"flex", alignItems:"flex-end"}}>
                   <Grid item>
                      <Box>
                        {Array.from({ length: 5 }).map((i, index) => (
                          <img key={index} alt="star" src={StarSVG} />
                        ))}
                      </Box>
                    </Grid>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Box>
        </Link>
      ))}
    </Grid>
  );
};

export default VenueCard;

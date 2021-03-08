import { Box, Card, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import AddSVG from '../assets/button-add.svg';
import ButtonSub from '../assets/button-sub';
import HeartIcon from '../assets/heart.js';
import CloseSVG from '../assets/ic-close.svg';
import Spaghetti from '../assets/spaghetti.png';

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

const MenuCard = () => {
  const classes = useStyles(Spaghetti)();

  return (
    <Grid container spacing={0} direction="column">
      {Array.from({ length: 5 }).map((i, index) => (
        <Grid item className={classes.gridWrapper}>
          <Card elevation={0} className={classes.cardContainer}>
            <Grid container className={classes.gridContainer}>
              <Grid item xs={3} className={classes.menuWrapper}>
                <Box p={1}>
                  <HeartIcon color={index < 1 ? '#F1608A' : '#FFFFFF'} />
                </Box>
              </Grid>
              <Grid item xs={8}>
                <Box ml={3} fontSize={14} color="#7B00AB">
                  Spaghetti
                </Box>
                <Box ml={3} fontWeight={600} fontSize={16} color="#0E0E0E">
                  Medium Spicy Spaghetti
                </Box>
                <Box
                  ml={3}
                  mt={2}
                  fontWeight={600}
                  fontSize={16}
                  color="#5E4E63"
                >
                  $43
                </Box>
              </Grid>
              <Grid item xs={1} className={classes.alignRight}>
                <img alt="close" src={CloseSVG} />
              </Grid>
            </Grid>
            <Grid
              container
              justify="flex-end"
              className={classes.gridContainer}
            >
              <Grid item>
                <ButtonSub
                  fill={index < 3 ? '#EAEAEA' : '#EEE5F1'}
                  stroke={index < 3 ? '#BFBFBF' : '#540174'}
                />
              </Grid>
              <Grid item>
                <Box fontWeight={700} fontStyle={16} mb={2} ml={3} mr={3}>
                  1
                </Box>
              </Grid>
              <Grid item>
                <img alt="add" src={AddSVG} />
              </Grid>
            </Grid>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default MenuCard;

import { Box, Button, Card, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import React from 'react';
import { useHistory } from 'react-router';
const useStyles=makeStyles((theme)=>({
    cardContainer: {
        boxShadow: '0px 4px 4px rgba(71, 71, 71, 0.1)',
        borderRadius: '15px',
        marginBottom:'10px'
    },
    gridContainer: {
        padding: '10px 10px 0 8px',
    },
    gridWrapper: {
        height: '100%',
    },
    esKrim :{
        backgroundImage:`url(${process.env.PUBLIC_URL+'/assets/eskrim.png'})`,
        background: 'no-repeat',
    },
    Spageti :{
        backgroundImage:`url(${process.env.PUBLIC_URL+'/assets/spageti.png'})`,
        background: 'no-repeat',
    },
}))

const MenuCard= () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
    <Grid
        container spacing={0} direction="column"
    >
        {Array.from({ length: 5 }).map((i, index) => (
        <Grid item className={classes.gridWrapper}>
             <Typography>28 February 2021</Typography>
          <Card elevation={0} className={classes.cardContainer}>
            <Grid container className={classes.gridContainer}>
              <Grid item xs={3} className={classes.Spageti}>
                <Box p={1}>
                <IconButton>
                    <FavoriteIcon style={{ color: 'white' }} />
                </IconButton>
                </Box>
              </Grid>
              <Grid item xs={8}>
                <Box ml={3} fontSize={14} fontFamily='Open Sans' color="#7B00AB">
                Restaurant Hubert
                </Box>
                <Box ml={3} fontWeight={600} fontFamily='Open Sans' fontSize={16} color="#0E0E0E">
                  Medium Spicy Spaghetti
                </Box>
                <Box
                  ml={3}
                  mt={2}
                  fontWeight={600}
                  fontSize={16}
                  color="#5E4E63"
                  fontFamily='Open Sans'
                >
                  $43
                </Box>
              </Grid>
            </Grid>
            <Grid
              container
              justify="flex-end"
              className={classes.gridContainer}
            >
              <Grid item>
                <Box fontWeight={700} fontStyle={16} mb={2} ml={3} mr={3} style={{color:'#FFCC47'}}>
                  waiting payment
                </Box>
              </Grid>
            </Grid>
          </Card>
          <Card elevation={0} className={classes.cardContainer}>
            <Grid container className={classes.gridContainer}>
              <Grid item xs={3} className={classes.Spageti}>
                <Box p={1}>
                <IconButton>
                    <FavoriteIcon style={{ color: 'white' }} />
                </IconButton>
                </Box>
              </Grid>
              <Grid item xs={8}>
                <Box ml={3} fontSize={14} fontFamily='Open Sans' color="#7B00AB">
                Restaurant Hubert
                </Box>
                <Box ml={3} fontWeight={600} fontFamily='Open Sans' fontSize={16} color="#0E0E0E">
                  Medium Spicy Spaghetti
                </Box>
                <Box
                  ml={3}
                  mt={2}
                  fontWeight={600}
                  fontSize={16}
                  color="#5E4E63"
                  fontFamily='Open Sans'
                >
                  $43
                </Box>
              </Grid>
            </Grid>
            <Grid
              container
              justify="flex-end"
              className={classes.gridContainer}
            >
              <Grid item>
                <Box fontWeight={700} fontStyle={16} mb={2} ml={3} mr={3} style={{color:'#F43939'}}>
                  canceled
                </Box>
              </Grid>
            </Grid>
          </Card>
          <Card elevation={0} className={classes.cardContainer}>
            <Grid container className={classes.gridContainer}>
              <Grid item xs={3} className={classes.Spageti}>
                <Box p={1}>
                <IconButton>
                    <FavoriteIcon style={{ color: 'white' }} />
                </IconButton>
                </Box>
              </Grid>
              <Grid item xs={8}>
                <Box ml={3} fontSize={14} fontFamily='Open Sans' color="#7B00AB">
                Restaurant Hubert
                </Box>
                <Box ml={3} fontWeight={600} fontFamily='Open Sans' fontSize={16} color="#0E0E0E">
                  Medium Spicy Spaghetti
                </Box>
                <Box
                  ml={3}
                  mt={2}
                  fontWeight={600}
                  fontSize={16}
                  color="#5E4E63"
                  fontFamily='Open Sans'
                >
                  $43
                </Box>
              </Grid>
            </Grid>
            <Grid
              container
              justify="flex-end"
              className={classes.gridContainer}
            >
              <Grid item>
                <Box fontWeight={700} fontFamily='Open Sans' fontStyle={16} mb={2} ml={3} mr={3} style={{color:'#11B151'}}>
                  completed
                </Box>
              </Grid>
            </Grid>
            <Grid
              container
              justify="flex-end"
              className={classes.gridContainer}
            >
              <Grid item>
                <Box fontWeight={700} fontFamily='Open Sans' fontStyle={16} mb={2} ml={3} mr={3} style={{color:'#FFCC47'}}>
                <Button variant="contained" color="primary" onClick={()=>history.push('/member/review')}style={{borderRadius:'50px 50px 50px 50px',fontSize:'12px',marginTop:'2px', background: '#20D3C2'}}>
                    add review
                </Button>
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      ))}
        </Grid> 
    </>
  );
};

export default MenuCard;

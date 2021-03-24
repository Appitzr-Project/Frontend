import { Box, Button, Card, Grid, makeStyles} from '@material-ui/core';
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
        padding: '8px 8px 0 8px',
    },
    gridWrapper: {
        height: '100%',
    },
    Spageti :{
        backgroundImage:`url(${process.env.PUBLIC_URL+'/assets/spageti.png'})`,
        background: 'no-repeat',
        height:'100px',
        width:'350px'
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
            <Box ml={3} fontSize={14} mt={2} mb={1} fontFamily='Open Sans' color="#474747">
                February 25, 2020
            </Box>
          <Card elevation={0} className={classes.cardContainer}>
            <Grid container className={classes.gridContainer}>
              <Grid item xs={3} className={classes.Spageti}>
              <Box p={1}>
              <FavoriteIcon fontSize='medium' style={{ color: '#FFFFFF'}} />
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
            >
              <Grid item>
                <Box fontWeight={700} fontStyle={16} mb={2} ml={10} mr={10} style={{color:'#FFCC47'}}>
                  WaitingPayment
                </Box>
              </Grid>
            </Grid>
          </Card>
          <Card elevation={0} className={classes.cardContainer}>
            <Grid container className={classes.gridContainer}>
              <Grid item xs={3} className={classes.Spageti}>
              <Box p={1}>
              <FavoriteIcon fontSize='medium' style={{ color: '#FFFFFF'}} />
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
            >
              <Grid item>
                <Box fontWeight={700} fontStyle={16} mb={2} ml={10} mr={10} style={{color:'#F43939'}}>
                  Canceled
                </Box>
              </Grid>
            </Grid>
          </Card>
          <Card elevation={0} className={classes.cardContainer}>
            <Grid container className={classes.gridContainer}>
              <Grid item xs={3} className={classes.Spageti}>
              <Box p={1}>
              <FavoriteIcon fontSize='medium' style={{ color: '#FFFFFF'}} />
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
            >
              <Grid item>
                <Box fontWeight={700} fontStyle={16} mb={1} ml={10} mr={10} style={{color:'#11B151'}}>
                  Completed
                </Box>
              </Grid>
              <Grid container item justify='flex-end'>
                <Box fontWeight={600} fontStyle='normal' mb={2} ml={10} mr={10} style={{color:'#FFCC47'}}>
                    <Button variant="contained" color="primary" onClick={()=>history.push('/member/review')}style={{borderRadius:'50px 50px 50px 50px',fontSize:'12px',marginTop:'2px', background: '#20D3C2'}}>
                        Add Review
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

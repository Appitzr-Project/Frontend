import { Button, Card,Container, Box, Grid, makeStyles, IconButton, Typography} from '@material-ui/core';
import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavBar from '../../NavBar';
import { useHistory } from 'react-router';

const useStyles=makeStyles((theme)=>({
  containerRoot: {
    background: 'linear-gradient(90deg, #5263C8 0%, #303C83 100%)',
  },
  cardRoot: {
    padding: '24px 24px 140px 24px',
    marginTop: '24px',
    borderRadius: '50px 50px 0 0',
  },
  esKrim :{
    height:100,
    width:100,
    backgroundImage:`url(${process.env.PUBLIC_URL+'/assets/eskrim.png'})`,
    background: 'no-repeat',
  },
  Spageti :{
    height:100,
    width:100,
    backgroundImage:`url(${process.env.PUBLIC_URL+'/assets/spageti.png'})`,
    background: 'no-repeat',
  }
}))

const OrderHistory = () => {
  const classes = useStyles();
  const history=useHistory()
  return (
    <>
      <div className="App">
      <Container
        classes={{ root: classes.containerRoot }}
        maxWidth="sm"
        disableGutters
      >
        <NavBar title="Order History" NavIcon={()=>history.push('/member/profile')} />
        <Card classes={{ root: classes.cardRoot }} elevation={0}>
        <Typography variant="caption" display="block" gutterBottom>February 28, 2020</Typography>
          <Grid container >
            <Grid item className={classes.Spageti}>
              <IconButton>
                <FavoriteIcon style={{ color: 'white' }} />
              </IconButton>
            </Grid>
            <Grid item xs={8}>
                <Box ml={3} fontSize={14} color="#7B00AB">
                  Restaurant Hubert
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
                <Grid
                  container
                  direction="row"
                  justify="flex-end"
                  alignItems="center"
                  style={{color:'#FFCC47'}}
                >
                  waiting payment
                </Grid>
              </Grid>
          </Grid>
          <Grid container >
            <Grid item className={classes.esKrim}>
              <IconButton>
                <FavoriteIcon style={{ color: 'white' }} />
              </IconButton>
            </Grid>
            <Grid item xs={8}>
                <Box ml={3} fontSize={14} color="#7B00AB">
                Ragazzi WIne and Pasta
                </Box>
                <Box ml={3} fontWeight={600} fontSize={16} color="#0E0E0E">
                Ice Cream Cone
                </Box>
                <Box
                  ml={3}
                  mt={2}
                  fontWeight={600}
                  fontSize={16}
                  color="#5E4E63"
                >
                 $15
                </Box>
                <Grid
                  container
                  direction="row"
                  justify="flex-end"
                  alignItems="center"
                  style={{color:'#F43939'}}
                >
                  Canceled
                </Grid>
              </Grid>
          </Grid>
          <Typography variant="caption" display="block" gutterBottom>February 26, 2020</Typography>
          <Grid container >
            <Grid item className={classes.Spageti}>
              <IconButton>
                <FavoriteIcon style={{ color: 'white' }} />
              </IconButton>
            </Grid>
            <Grid item xs={8}>
                <Box ml={3} fontSize={14} color="#7B00AB">
                  Restaurant Hubert
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
                <Grid
                  container
                  direction="row"
                  justify="flex-end"
                  alignItems="center"
                  style={{color:'#11B151'}}
                >
                  Completed
                </Grid>
                <Grid
                  container
                  direction="row"
                  justify="flex-end"
                  alignItems="center"
                >
                  <Button variant="contained" color="primary" onClick={()=>history.push('/member/review')} style={{borderRadius:'50px 50px 50px 50px',fontSize:'14px',marginTop:'2px'}}>
                    add review
                  </Button>
                </Grid>
            </Grid>
          </Grid>
          <Typography variant="caption" display="block" gutterBottom>February 24, 2020</Typography>
          <Grid container >
            <Grid item className={classes.Spageti}>
              <IconButton>
                <FavoriteIcon style={{ color: 'white' }} />
              </IconButton>
            </Grid>
            <Grid item xs={8}>
                <Box ml={3} fontSize={14} color="#7B00AB">
                  Restaurant Hubert
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
                <Grid
                  container
                  direction="row"
                  justify="flex-end"
                  alignItems="center"
                  style={{color:'#11B151'}}
                >
                  Completed
                </Grid>
            </Grid>
          </Grid>
        </Card>
      </Container>
      </div>
     
    </>
  );
};

export default OrderHistory;

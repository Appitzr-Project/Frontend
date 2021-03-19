import {Grid, CardMedia, Container, makeStyles,Button, Box } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';

const useStyles=makeStyles((theme)=>({
    containerRoot: {
        backgroundColor:'white',
        padding: '32px 24px 100px 24px',
      },
    buttonRoot:{
        width: '367px',
        height: '50px',
        fontSize:'12px',
        marginTop:'20px', 
        background: '#20D3C2'
    }
}))

const WelcomePage = () => {
    const classes = useStyles();
    const history=useHistory()
  return (
    <>
      <Container
        className={classes.containerRoot}
        maxWidth="sm"
        disableGutters
      >
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
        >
            <Grid item xs={5} md={3} style={{marginTop:'109px'}}>
                <CardMedia 
                component="img"
                alt="Welcome pict"
                height="140"
                image="/assets/welcome.png"
                title="Welcome"
                />
            </Grid>
            <Grid item xs={12} md={7} 
            container
            direction="row"
            justify="center"
            alignItems="center"
            >
                <Box fontSize={18} fontWeight={400} marginTop={5}>
                  Select Registration Type
                </Box>
            </Grid>
            <Grid item xs={10} md={8} container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Button variant="contained" color="primary" className={classes.buttonRoot} onClick={()=>history.push('/')}>
                    Member
                </Button>
            </Grid>
            <Grid item xs={10} md={8} container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Button variant="contained" color="primary" className={classes.buttonRoot} onClick={()=>history.push('/venue')}>
                    Venue
                </Button>
            </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default WelcomePage;

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
    },
    DateOrder:{
        marginTop:'15px',
        marginBottom:'15px'
    }
}))

const MenuCard= () => {
  const classes = useStyles();
  const history = useHistory()
  return (
    <>
        <Grid container  spacing={0} direction="column">
        <Typography variant="caption" display="block" className={classes.DateOrder}>February 28, 2020</Typography>
            <Grid item className={classes.gridWrapper}>
           
                <Card elevation={0} className={classes.cardContainer}>
                
                    <Grid container className={classes.gridContainer}>
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
                </Card>
                <Card elevation={0} className={classes.cardContainer}>
                    <Grid container className={classes.gridContainer}>
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
                </Card>
                <Typography variant="caption" display="block" gutterBottom className={classes.DateOrder}>February 25, 2020</Typography>
                <Card elevation={0} className={classes.cardContainer}>
                    <Grid container className={classes.gridContainer}>
                            <Grid item className={classes.Spageti}>
                            <IconButton>
                                <FavoriteIcon style={{ color: 'white' }} />
                            </IconButton>
                            </Grid>
                            <Grid item xs={8} >
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
                                <Button variant="contained" color="primary" onClick={()=>history.push('/member/review')}style={{borderRadius:'50px 50px 50px 50px',fontSize:'12px',marginTop:'2px', background: '#20D3C2'}}>
                                    add review
                                </Button>
                                </Grid>
                            </Grid>
                    </Grid>
                </Card>
                <Typography variant="caption" display="block" className={classes.DateOrder}>February 23, 2020</Typography>
                <Card elevation={0} className={classes.cardContainer}>
                
                    <Grid container className={classes.gridContainer}>
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
                                <Button variant="contained" color="primary" onClick={()=>history.push('/member/review')} style={{borderRadius:'50px 50px 50px 50px',fontSize:'12px',marginTop:'2px', background: '#20D3C2'}}>
                                    add review
                                </Button>
                                </Grid>
                        </Grid>
                    </Grid>
                </Card>
                <Card elevation={0} className={classes.cardContainer}>
                    <Grid container className={classes.gridContainer}>
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
                </Card>
            </Grid>
        </Grid>
    </>
  );
};

export default MenuCard;

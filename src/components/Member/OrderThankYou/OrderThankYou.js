import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import Paper from '@material-ui/core/Paper';
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import facebookIcon from './assets/facebook.svg';
import twitterIcon from './assets/twitter.svg';
import googlePlusIcon from './assets/googlePlus.svg';
import pinterestIcon from './assets/pinterest.svg';

const useStyle = makeStyles((theme) => ({
    container : {
        minHeight: "100vh",
        paddingLeft: '0px',
        paddingRight: '0px',
        background: 'url(/src/img/bg.png)',
        backgroundSize: '100% 100%',  
    },
    header : {
        paddingLeft: '24px',
        paddingRight: '24px',
        height: '130px',
    },
    backIcon : {
        color: '#ffffff',
        fontSize: '21px',
    },
    favoriteIcon: {
        color: '#ffffff',
        fontSize: '21px',
        marginRight: '20px',
    },
    moreIcon: {
        color: '#ffffff',
        fontSize: '21px',
    },
    main: {
        background: theme.palette.background.paper,
        padding: "50px 25px",
        borderTopLeftRadius: "50px",
        borderTopRightRadius: "50px",
        minHeight: "86vh",
    },
    closeIconBox: {
        marginTop: '-25px',
        textAlign: 'right',
    },
    closeIcon: {
        fontSize: '30px',
    },
    headingBox: {
        textAlign: 'center',
        color: '#000000',
        marginTop: '24px',
    },
    headingTitle: {
        fontSize: '22px',
        fontWeight: '600',
    },
    headingText: {
        fontSize: '16px',
        fontWeight: '400',
    },
    tableBox: {        
        textAlign: 'left',
        marginTop: '35px',
    },
    tableText: {
        color: '#4F147B',
        fontSize: '22px',
        fontWeight: '600',
    },
    contentBox: {        
        marginTop: '35px',
        textAlign: 'center',
    },
    content: {
        color: '#735F7A',
        fontSize: '26px',
        fontWeight: '600',
        padding: '0px 50px',
    },
    shareTitleBox: {
        marginTop: '90px',
        textAlign: 'center',
    },
    shareTitleText: {
        fontSize: '26px',
        fontWeight: '600',
    },
    shareItem: {
        display: 'flex',
        marginTop: '20px',
        padding: '0px 10px',
        "&:nth-child(odd)": {
            justifyContent: 'flex-end',
        },
    }, 
    shareIconBackground: {
        width: '50px',
        height: '50px',
        boxShadow: 'none',
        borderRadius: '0px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    shareIcon: {
        fontSize: '24px',
        color: '#FFFFFF',
        verticalAlign: 'middle',
    },
    shareTextBackground: {
        width: '130px',
        height: '50px',
        boxShadow: 'none',
        borderRadius: '0px',
        padding: '0px 18px',
        display: 'flex',
        alignItems: 'center',
    },
    shareText: {
        fontSize: '20px',
        fontWeight: '600',
        color: '#ffffff',
        verticalAlign: 'middle',
        marginBottom: '0px',
    },

}));

const OrderThankYou = () => {
  const classes = useStyle();
    return (     
        <Container maxWidth="sm" className={classes.container}>
            <Grid container spacing={0} className={classes.header} >
                <Grid item xs={12} 
                    alignItems="center" 
                    container
                    justify="space-between">
                    <ArrowBackIosIcon className={classes.backIcon} />
                    <span>
                        <FavoriteIcon className={classes.favoriteIcon} />
                        <MoreVertIcon className={classes.moreIcon} />
                    </span>
                </Grid>
            </Grid>
            
            <Grid container spacing={0} className={classes.main} >
                <Grid item xs={12}>
                    
                    <Grid container spacing={0}>

                        <Grid item xs={12} className={classes.closeIconBox}>                     
                            <CloseRoundedIcon className={classes.closeIcon} style={{ color: '#A3A3A3'}} />
                        </Grid>

                        <Grid item xs={12} className={classes.headingBox}>                     
                            <h2 className={classes.headingTitle}>Your done!</h2>
                            <p className={classes.headingText}>We’ve sent your order to the kitchen.</p>
                        </Grid>

                        <Grid item xs={12} className={classes.tableBox}>                     
                            <p className={classes.tableText}>Table #23</p>
                        </Grid>

                        <Grid item xs={12} className={classes.contentBox}>                                      
                            <p className={classes.content}>Thanks Tony and we hope you enjoy your experience!</p>
                        </Grid>

                        <Grid item xs={12} className={classes.shareTitleBox}>                                      
                            <p className={classes.shareTitleText}>Share it</p>
                        </Grid>
                        <Grid item xs={12}>                                      
                            <Grid container spacing={0}>
                                <Grid item xs={6} className={classes.shareItem}>                                
                                    <Paper className={classes.shareIconBackground} style={{ background: '#2A5CC3'}}>
                                        <img alt="Share to Facebook" src={facebookIcon} />
                                    </Paper>
                                    <Paper className={classes.shareTextBackground} style={{ background: '#2F66D9'}}>
                                        <p className={classes.shareText}>Facebook</p>
                                    </Paper>                                    
                                </Grid>
                                <Grid item xs={6} className={classes.shareItem}>
                                    <Paper className={classes.shareIconBackground} style={{ background: '#1F9AE5'}}>
                                        <img alt="Share to Twitter" src={twitterIcon} />
                                    </Paper>
                                    <Paper className={classes.shareTextBackground} style={{ background: '#23ABFF'}}>
                                        <p className={classes.shareText}>Twitter</p>
                                    </Paper>
                                </Grid>
                                <Grid item xs={6} className={classes.shareItem}>
                                    <Paper className={classes.shareIconBackground} style={{ background: '#DD2E25'}}>
                                        <img alt="Share to Google+" src={googlePlusIcon} />
                                    </Paper>
                                    <Paper className={classes.shareTextBackground} style={{ background: '#F63329'}}>
                                        <p className={classes.shareText}>Google+</p>
                                    </Paper>
                                </Grid>
                                <Grid item xs={6} className={classes.shareItem}>
                                    <Paper className={classes.shareIconBackground} style={{ background: '#D22C3E'}}>
                                        <img alt="Share to Pinterest" src={pinterestIcon} />
                                    </Paper>
                                    <Paper className={classes.shareTextBackground} style={{ background: '#EA3145'}}>
                                        <p className={classes.shareText}>Pinterest</p>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                    
                </Grid>
            </Grid>
            
        </Container>
        
    );
}

export default OrderThankYou;

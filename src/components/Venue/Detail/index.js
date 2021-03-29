import React, {useEffect, useState} from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import {useSelector} from "react-redux";

import { 
    withStyles,
    makeStyles
} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import Grid from '@material-ui/core/Grid';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import StarIcon from '@material-ui/icons/Star';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import {getVenueById} from "../../../redux/api/venue.api"

const MenuButton = withStyles((theme) => ({
    root: {
        color: 'white',
        backgroundColor: '#20D3C2',
        '&:hover': {
            backgroundColor: '#20D3C2',
        },
        height: '58px',
        fontSize: '18px',
        borderRadius: '18px',
        textTransform: 'capitalize',
        marginTop: '5px',
        position: 'fixed',
        bottom: 15,
        width: 'calc(100% - 48px)',
        left: '50%',
        maxWidth: '552px',
        transform: 'translate(-50%)'
    }
}))(Button);

const CustomRating = withStyles(() => ({
    root: {
        fontSize: 15
    }
}))(Rating);

const useStyles = makeStyles({
    container : {
        paddingLeft: '0px',
        paddingRight: '0px',
        paddingTop: '30px',
        background: 'url(/src/img/bg.png)',
        backgroundSize: '100% 100%',
        '&::before' :{
            content: '""',
            position: 'absolute',
            left: 0,
            right: 0,
            zIndex: 0,
            display: 'block',
            backgroundSize: 'cover',
            width: '100%',
            height: '400px',
            top: 0,
            background: 'linear-gradient(180deg, rgba(64, 64, 64, 0.5) 0%, rgba(0, 0, 0, 0) 100%)',
        }
    },
    header : {
        paddingLeft: '24px',
        paddingRight: '24px',
        marginBottom: '240px'
    },
    backIcon : {
        color: '#fff',
        fontSize: '30px',
        flex: '0 1 auto',
        marginRight: 'auto,  ' 
    },
    title : {
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '30px',
        color: '#fff',
        position: 'relative',
    },
    detailBox : {
        paddingLeft: '24px',
        paddingRight: '24px',
        paddingBottom: '24px',
        paddingTop: '30px',
        boxShadow: 'none',
        borderRadius: '50px 50px 0px 0px',
        backgroundColor: 'white',
        minHeight: '100vh',
        position: 'relative'
    },
    detailSummary : {
        boxShadow: '0px 4px 4px rgb(0 0 0 / 15%)',
        borderRadius: '20px',
        marginTop: -80,
        backgroundColor: 'white',
        padding: 20,
        display: 'flex',
        justifyContent: 'space-between'
    },
    detailSearchContainer : {
        paddingBottom: '32px',
        marginTop: '50px'
    },
    detailTextWelcome: {
        fontSize: '16px',
        color: '#464646',
    },
    detailSectionTitle: {
        fontSize: '18px',
        marginBottom: '25px',
    },
    titleText: {
        flex: '0 1 auto',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
    },
    detailShowingText: {
        fontSize: '18px',
        margin: 0
    },
    selectIcon: {
        fill: '#FF3974',
    },
    venueRate : {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    venueAddress: {
        maxWidth: 214
    },
    venueName : {
        fontSize: 20,
        fontWeight: 600,
        color: '#0E0E0E'
    },
    venueCompleteAddress : {
        lineHeight: '16.3px',
        fontSize: 12,
        color: '#59495F'
    },
    venueImg : {
        width: '115px',
        height: '115px',
        borderRadius: '50%',
        marginTop: '-57px',
        border: '2px solid white'
    },
    venueCurrentStar : {
        color: '#FF7F23',
        fontSize: 18
    },
    venueMaxStar : {
        color: '#e6e6e6',
        fontSize: 18
    },
    venueStar: {
        fontSize: 16
    },
    reviewContainer: {
        display: 'flex',
        alignItems: 'flex-start',
        boxShadow: '0px 4px 4px rgba(71, 71, 71, 0.2);',
        backgroundColor: 'white',
        borderRadius: '15px',
        padding: 15,
        marginBottom: 15,
        '&:last-child': {
            marginBottom: 67
        }
    },
    reviewTitleContainer: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    reviewerName: {
        color: '#0E0E0E',
        fontSize: 14,
        fontWeight: 700
    },
    reviewText: {
        color: '#59495F',
        lineHeight: '16.3px',
        fontSize: 12
    },
    reviewerImage: {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        marginRight: 15
    },
    descriptionSectionTitle: {
        color: '#6B5C70',
        fontSize: 20,
        marginBottom: 20,
        marginTop: 20
    },
    descriptionText: {
        color: '#59495F',
        marginBottom: 30,
        fontSize: 14,
        lineHeight: '19px'
    },
    reviewSectionTitle: {
        marginBottom: 20,
    },
    discountContainer: {
        backgroundColor: '#02A1F3',
        fontSize: 18,
        display: 'flex',
        justifyContent: 'space-between',
        padding: 18,
        fontWeight: 700,
        borderRadius: 5,
        color: 'white',
        '& a': {
            fontWeight: 400,
            color: 'white',
            fontSize: 14
        }
    }
});

const Detail = () => {
    const classes = useStyles();
    const history = useHistory();
    const params = useParams();
    const auth = useSelector(state => state.auth);
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
     
    // api
    useEffect(() => {
        let isActive = true;
        const http = async () => {
            if(params.idVenue){
                try {
                    setLoading(true);
                    const res = await getVenueById(params.idVenue);
                    if(isActive){
                        setItem(res.data);
                        setLoading(false);
                    }
                } catch (error) {
                    console.log(error);
                }
            }else{
                history.push("/venue");
            }
        }
        http();

        return () => {
            isActive=false;
        }
    },[]);
    return !loading ? (
        <div className="App">        
            <Container maxWidth="sm" className={classes.container}>
                <Grid container spacing={0} className={classes.header} >
                    <Grid item xs={12} className={classes.title} 
                        alignItems="center" 
                        container
                        justify="space-between">
                        <NavigateBeforeIcon onClick={() => history.goBack()} className={classes.backIcon} />
                        <span>
                            <FavoriteIcon />
                            <MoreVertIcon />
                        </span>
                    </Grid>
                </Grid>

                <Grid item xs={12} className={classes.detailBox}>
                    <Grid item xs={12} className={classes.detailSummary}>  
                        <div className={classes.venueAddress}>
                            <div className={classes.venueName}>{item.venueName}</div>
                            <div className={classes.venueCompleteAddress}>
                                {item.address}
                            </div>
                        </div>
                        <div className={classes.venueRate}>
                            <img className={classes.venueImg} src="/src/img/imgadmin.png" alt="venue" />
                            <div>
                                <span className={classes.venueCurrentStar}><StarIcon className={classes.venueStar} /> 4</span><span className={classes.venueMaxStar}>/5</span> 
                            </div>
                        </div>
                    </Grid>
                    
                    {/* di hide utk sementara */}

                    {/* <Grid item xs={12}>  
                        <h3 className={classes.descriptionSectionTitle}>
                            Description 
                        </h3>
                        <p className={classes.descriptionText}>
                            We’re proud of Sydney, it’s the most beautiful city in the world. Yes, we may be biased but grab a seat at Opera Bar on a sunny day with a cold glass of something delicious, take in the view and you decide. Pure joy.

                            We’re proud of Sydney, it’s the most beautiful city in the world. Yes, we may be biased but grab a seat at Opera Bar 
                        </p>
                    </Grid>

                    <Grid item xs={12}>  
                        <p className={classes.discountContainer}>
                            <span>20% OFF</span>
                            <Link to="/promo">See Details &gt;&gt;</Link>
                        </p>
                    </Grid>
                    <Grid item xs={12}>  
                        <h3 className={classes.reviewSectionTitle}>
                            Review 
                        </h3>
                        <div>
                            <div className={classes.reviewContainer}>
                                <img className={classes.reviewerImage} src="/src/img/imgadmin.png" alt="reviewer" />
                                <div>
                                    <p className={classes.reviewTitleContainer}>
                                        <span className={classes.reviewerName}>John Doe</span>
                                        <span>
                                            <CustomRating readOnly name="size-small" defaultValue={2} />
                                        </span>
                                    </p>
                                    <p className={classes.reviewText}>This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation, wide wine list and wonderful dessert.</p>
                                </div>
                            </div>
                            <div className={classes.reviewContainer}>
                                <img className={classes.reviewerImage} src="/src/img/imgadmin.png" alt="reviewer" />
                                <div>
                                    <p className={classes.reviewTitleContainer}>
                                        <span className={classes.reviewerName}>John Doe</span>
                                        <span>
                                            <CustomRating readOnly name="size-small" defaultValue={2} />
                                        </span>
                                    </p>
                                    <p className={classes.reviewText}>This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation, wide wine list and wonderful dessert.</p>
                                </div>
                            </div>
                        </div>
                    </Grid>
                     */}
                    
                    {/* end - di hide utk sementara */}

                    <Link to="/member/order-menu">
                        <MenuButton variant="contained">Menu</MenuButton>               
                    </Link>
                </Grid>
            </Container>
        </div>
    ): "Loading...";
};

export default Detail; 
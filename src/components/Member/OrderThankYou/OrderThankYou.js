import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import Paper from '@material-ui/core/Paper';
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';

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
                                        <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.06332 24V12.7385H0V8.68382H3.06332V5.2206C3.06332 2.49917 4.87284 0 9.04235 0C10.7305 0 11.9788 0.15732 11.9788 0.15732L11.8805 3.9437C11.8805 3.9437 10.6074 3.93166 9.21814 3.93166C7.71455 3.93166 7.47365 4.60522 7.47365 5.72316V8.68382H12L11.8031 12.7385H7.47365V24H3.06332Z" fill="white"/>
                                        </svg>
                                    </Paper>
                                    <Paper className={classes.shareTextBackground} style={{ background: '#2F66D9'}}>
                                        <p className={classes.shareText}>Facebook</p>
                                    </Paper>                                    
                                </Grid>
                                <Grid item xs={6} className={classes.shareItem}>
                                    <Paper className={classes.shareIconBackground} style={{ background: '#1F9AE5'}}>
                                        <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24 2.3143C23.1174 2.70538 22.1693 2.96963 21.1726 3.08907C22.201 2.47368 22.9704 1.50514 23.3373 0.364152C22.371 0.938086 21.3135 1.34207 20.2107 1.55855C19.4691 0.766723 18.4868 0.241886 17.4164 0.0655253C16.3459 -0.110836 15.2472 0.0711458 14.2907 0.583216C13.3343 1.09529 12.5737 1.9088 12.127 2.89744C11.6803 3.88609 11.5725 4.99456 11.8203 6.05075C9.86244 5.95245 7.94711 5.44357 6.19863 4.55713C4.45016 3.67069 2.90761 2.42651 1.6711 0.905331C1.2483 1.63465 1.0052 2.48024 1.0052 3.3808C1.00473 4.19151 1.20437 4.98979 1.58641 5.70484C1.96846 6.41988 2.52109 7.02957 3.19528 7.4798C2.4134 7.45493 1.64877 7.24366 0.965031 6.86358V6.927C0.964952 8.06404 1.35827 9.1661 2.07823 10.0462C2.7982 10.9262 3.80048 11.5301 4.915 11.7553C4.18968 11.9516 3.42923 11.9805 2.69109 11.8399C3.00555 12.8182 3.61807 13.6738 4.44291 14.2867C5.26776 14.8997 6.26363 15.2394 7.29111 15.2582C5.5469 16.6274 3.39282 17.3701 1.17537 17.3669C0.782575 17.367 0.39011 17.344 0 17.2982C2.25083 18.7454 4.87097 19.5134 7.5469 19.5105C16.6053 19.5105 21.5573 12.0079 21.5573 5.50112C21.5573 5.28972 21.552 5.07621 21.5425 4.86481C22.5057 4.16823 23.3372 3.30564 23.9979 2.31747L24 2.3143Z" fill="white"/>
                                        </svg>
                                    </Paper>
                                    <Paper className={classes.shareTextBackground} style={{ background: '#23ABFF'}}>
                                        <p className={classes.shareText}>Twitter</p>
                                    </Paper>
                                </Grid>
                                <Grid item xs={6} className={classes.shareItem}>
                                    <Paper className={classes.shareIconBackground} style={{ background: '#DD2E25'}}>
                                        <svg width="27" height="17" viewBox="0 0 27 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.2672 12.0374V8.82683H26.4792V6.41987H23.2672V3.20927H20.8603V6.41987H17.6497V8.82683H20.8603V12.0374H23.2672ZM8.02584 3.12175C9.52836 3.12175 10.5402 3.7636 11.1158 4.30998L13.3994 2.09531C12.0096 0.795688 10.1967 3.66626e-07 8.02584 3.66626e-07C3.59916 -0.00132578 0 3.59518 0 8.02584C0 12.4565 3.59916 16.053 8.02584 16.053C12.6581 16.053 15.7334 12.7947 15.7334 8.2115C15.7334 7.54445 15.6485 7.07101 15.5305 6.56708H8.02186V9.55886H12.4406C12.231 10.82 11.0998 12.9485 8.02584 12.9485C5.36957 12.9485 3.20264 10.7405 3.20264 8.03645C3.20264 5.32846 5.36957 3.12175 8.02584 3.12175Z" fill="white"/>
                                        </svg>
                                    </Paper>
                                    <Paper className={classes.shareTextBackground} style={{ background: '#F63329'}}>
                                        <p className={classes.shareText}>Google+</p>
                                    </Paper>
                                </Grid>
                                <Grid item xs={6} className={classes.shareItem}>
                                    <Paper className={classes.shareIconBackground} style={{ background: '#D22C3E'}}>
                                        <svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.01864e-05 8.13906C8.01864e-05 7.15808 0.171561 6.23133 0.50948 5.36636C0.832336 4.52623 1.31201 3.75516 1.92294 3.09423C2.53263 2.44199 3.23032 1.87798 3.99584 1.41851C4.78127 0.943343 5.6316 0.584865 6.52015 0.354315C7.41943 0.118177 8.34543 -0.000909578 9.2752 5.23055e-06C10.7114 5.23055e-06 12.0479 0.30388 13.2874 0.909108C14.5106 1.5033 15.5518 2.41517 16.3021 3.54941C17.0763 4.70313 17.4609 6.00815 17.4609 7.46322C17.4609 8.33576 17.3752 9.18938 17.1999 10.0241C17.0278 10.8583 16.7543 11.6684 16.3854 12.4362C16.0337 13.1794 15.574 13.8665 15.0211 14.475C14.4654 15.0739 13.7924 15.552 13.044 15.8797C12.2315 16.2358 11.3525 16.415 10.4655 16.4055C9.8489 16.4055 9.23359 16.2605 8.62584 15.9692C8.01809 15.6792 7.58182 15.2807 7.31955 14.7701C7.22751 15.1244 7.10142 15.6363 6.93372 16.3058C6.77233 16.9741 6.66389 17.4053 6.61598 17.6008C6.56554 17.795 6.47223 18.119 6.33606 18.5679C6.24371 18.8999 6.12523 19.2242 5.98175 19.5375L5.548 20.3874C5.36042 20.752 5.15072 21.1049 4.92008 21.444C4.69186 21.7743 4.40942 22.169 4.07276 22.6229L3.88489 22.6897L3.76006 22.5536C3.62514 21.125 3.55579 20.2701 3.55579 19.9876C3.55579 19.1517 3.6554 18.2136 3.8521 17.1721C4.04502 16.1318 4.35015 14.8243 4.75994 13.252C5.16973 11.6809 5.40426 10.7567 5.4673 10.4831C5.17856 9.89422 5.0323 9.12507 5.0323 8.17941C5.0323 7.42413 5.26808 6.71677 5.74092 6.05102C6.21501 5.38779 6.81394 5.05618 7.54021 5.05618C8.09626 5.05618 8.52749 5.24027 8.83641 5.60971C9.14658 5.97789 9.29789 6.4419 9.29789 7.00804C9.29789 7.60822 9.09867 8.47698 8.69771 9.61304C8.29674 10.7504 8.09752 11.5989 8.09752 12.1626C8.09752 12.7337 8.30179 13.2116 8.71032 13.5861C9.11348 13.9608 9.64664 14.1638 10.1969 14.1522C10.6962 14.1522 11.159 14.0388 11.5889 13.8105C12.0122 13.589 12.3785 13.2727 12.6594 12.8863C13.2712 12.0469 13.7074 11.0927 13.9418 10.0808C14.0628 9.54873 14.1561 9.04312 14.2141 8.56776C14.2759 8.08988 14.3024 7.63848 14.3024 7.20978C14.3024 5.63745 13.8031 4.41186 12.8107 3.53428C11.8134 2.6567 10.5147 2.22043 8.9171 2.22043C7.10016 2.22043 5.58078 2.80801 4.36402 3.98694C3.146 5.16209 2.53321 6.65625 2.53321 8.46815C2.53321 8.86785 2.59373 9.25368 2.70847 9.62691C2.82069 9.99887 2.943 10.2952 3.07539 10.5146C3.20653 10.7302 3.33009 10.9408 3.44231 11.1349C3.55579 11.3291 3.61505 11.4678 3.61505 11.551C3.61505 11.8057 3.54823 12.1373 3.41331 12.5471C3.27335 12.9569 3.10818 13.1612 2.90896 13.1612C2.89004 13.1612 2.81187 13.1473 2.67569 13.1183C2.20407 12.9775 1.77816 12.7143 1.44128 12.3555C1.08374 11.9836 0.801571 11.546 0.610351 11.0668C0.419677 10.5894 0.271165 10.0962 0.166518 9.59286C0.0534557 9.1166 -0.00241779 8.62855 8.01864e-05 8.13906Z" fill="white"/>
                                        </svg>
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

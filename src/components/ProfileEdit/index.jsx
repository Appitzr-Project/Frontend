import React from "react";

import { 
    fade,
    withStyles
} from '@material-ui/core/styles';
import classes from './index.module.css';
import Container from '@material-ui/core/Container';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const SubmitButton = withStyles(() => ({
    root: {
        color: 'white',
        backgroundColor: '#20D3C2',
        '&:hover': {
            backgroundColor: '#20D3C2',
        },
        width: '100%',
        height: '58px',
        fontSize: '18px',
        borderRadius: '18px',
        textTransform: 'capitalize',
        marginTop: '5px'
    }
}))(Button);

const CustomInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: '#F3F3F3',
        border: 'none',
        fontSize: 16,
        width: '100%',
        padding: '10px 12px',
        height: '27px',
        marginBottom: '26px',
        transition: theme.transitions.create(['border-color', 'box-shadow'])
    },
}))(InputBase);

const CustomLabel = withStyles(() => ({
    root: {
        color: '#464646'
    }
}))(InputLabel);

const Profile = () => {
    return (
        <div className="App">        
            <Container maxWidth="sm" className={classes.container}>
                <Grid container spacing={0} className={classes.header} >
                    <Grid item xs={13} className={classes.title} 
                        alignItems="center" 
                        container
                        justify="space-between">
                        <NavigateBeforeIcon className={classes.backIcon} />
                        <span>
                            Profile
                        </span>
                        <img src="/src/img/imgadmin.png" />
                    </Grid>
                </Grid>
            
                <Grid container spacing={0}>
                    <Grid item xs={12} className={classes.content}>
                        <Grid container spacing={0} className={classes.profileBox}>
                            <Grid item xs={12} className={classes.profileItem}>  
                                <form className={classes.root} noValidate autoComplete="off">
                                    <div>
                                        <h5 className={classes.profileSectionTitle}>Details</h5>
                                        <FormControl fullWidth>
                                            <CustomLabel shrink htmlFor="bootstrap-input">
                                                Name
                                            </CustomLabel>
                                            <CustomInput id="bootstrap-input" />
                                        </FormControl>
                                        <FormControl fullWidth>
                                            <CustomLabel shrink htmlFor="bootstrap-input">
                                                Email
                                            </CustomLabel>
                                            <CustomInput id="bootstrap-input" />
                                        </FormControl>
                                        <FormControl fullWidth>
                                            <CustomLabel shrink htmlFor="bootstrap-input">
                                                Mobile
                                            </CustomLabel>
                                            <CustomInput id="bootstrap-input" />
                                        </FormControl>
                                    </div>
                                    <div>
                                        <h5 className={classes.profileSectionTitle}>Password</h5>
                                        <FormControl fullWidth>
                                            <CustomLabel shrink htmlFor="bootstrap-input">
                                                Old Password
                                            </CustomLabel>
                                            <CustomInput id="bootstrap-input" />
                                        </FormControl>
                                        <FormControl fullWidth>
                                            <CustomLabel shrink htmlFor="bootstrap-input">
                                                New Password
                                            </CustomLabel>
                                            <CustomInput id="bootstrap-input" />
                                        </FormControl>
                                        <FormControl fullWidth>
                                            <CustomLabel shrink htmlFor="bootstrap-input">
                                                Confirm Password
                                            </CustomLabel>
                                            <CustomInput id="bootstrap-input" />
                                        </FormControl>
                                    </div>
                                    <div>
                                        <h5 className={classes.profileSectionTitle}>Payment Details</h5>
                                        <FormControl fullWidth>
                                            <CustomLabel shrink htmlFor="bootstrap-input">
                                                Card Number
                                            </CustomLabel>
                                            <CustomInput id="bootstrap-input" />
                                        </FormControl>
                                        <FormControl fullWidth>
                                            <CustomLabel shrink htmlFor="bootstrap-input">
                                                Expiring Date
                                            </CustomLabel>
                                            <CustomInput id="bootstrap-input" />
                                        </FormControl>
                                        <FormControl fullWidth>
                                            <CustomLabel shrink htmlFor="bootstrap-input">
                                                CVV
                                            </CustomLabel>
                                            <CustomInput id="bootstrap-input" />
                                        </FormControl>
                                    </div>
                                </form>
                                <SubmitButton type="submit" variant="contained" className={classes.profileSubmit}>Save Changes</SubmitButton>               
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Profile;
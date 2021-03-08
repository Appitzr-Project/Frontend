import React, { memo } from "react";

import { withStyles } from '@material-ui/core/styles';
import classes from './index.module.css';
import Container from '@material-ui/core/Container';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const SubmitButton = withStyles((theme) => ({
    root: {
        color: 'white',
        backgroundColor: '#20D3C2',
        '&:hover': {
            backgroundColor: '#20D3C2',
        },
        width: '100%',
        height: '58px',
        fontSize: '18px',
        borderRadius: '18px'
    }
}))(Button);

const Support = () => {
    return (
        <div className="App" style={{background:'#E5E5E5'}}>        
            <Container maxWidth="sm" className={classes.container}>
                <Grid container spacing={0} className={classes.header} >
                    <Grid item xs={2} className={classes.backIconBox}>
                        <NavigateBeforeIcon className={classes.backIcon} />
                    </Grid>
                    <Grid item xs={8} className={classes.title}>
                        Contact Support
                    </Grid>
                    <Grid item xs={2}>
                        <img src="/src/img/imgadmin.png" />
                    </Grid>
                </Grid>
            
                <Grid container spacing={0}>
                    <Grid item xs={12} className={classes.content}>
                    
                        <Grid container spacing={0} className={classes.supportBox}>

                            <Grid item xs={12} className={classes.supportItem}>  
                                <p className={classes.supportTextWelcome}>Hi John, how can we help?</p>
                                <TextareaAutosize
                                    aria-label="textarea support"
                                    placeholder="Write message here..."
                                    className={classes.supportTextarea}
                                />   
                                <SubmitButton variant="contained" className={classes.supportSubmit}>Submit</SubmitButton>               
                            </Grid>

                        </Grid>
                    
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default memo(Support);
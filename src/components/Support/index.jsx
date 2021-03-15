import React, { memo } from "react";


import { withStyles, makeStyles } from '@material-ui/core/styles';
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
        borderRadius: '18px',
        textTransform: 'capitalize',
        marginTop: '5px'
    }
}))(Button);

const useStyles = makeStyles({
    container : {
        background: 'linear-gradient(90deg, #5263C8 0%, #303C83 100%)',
        paddingLeft: '0px',
        paddingRight: '0px',
        paddingTop: '30px',
    },
    header : {
        paddingLeft:'24px',
        paddingRight: '24px',
    },
    backIconBox : {
        fontSize: '30px',
    },
    backIcon : {
        color: '#ffffff',
        fontSize: '30px',
    },
    title : {
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '30px',
        lineHeight: '41px',
        color: '#ffffff',
        textAlign: 'center',
    },
    content : {
        fontSize: '30px',
        color: '#ffffff',
        marginTop: '50px',
    },
    supportBox : {
        background: '#ffffff',
        paddingLeft: '24px',
        paddingRight: '24px',
        paddingBottom: '24px',
        borderRadius: '50px 50px 0px 0px',
        boxShadow: 'none',
        height: '100vh',
    },
    supportItem : {
        textAlign: 'left',
        marginTop: '24px',
        background: '#ffffff',
        paddingTop: '12px',
        paddingRight: '12px',
        paddingBottom: '12px',
        paddingLeft: '12px',
    },
    supportTextarea: {
        border: 'none',
        backgroundColor: '#F3F3F3',
        borderRadius:' 5px',
        padding: '13px',
        fontSize: '16px',
        width: '100%',
        minHeight: '195px',
        maxHeight: '195px',
        resize: 'none',
    },
    supportTextWelcome: {
        fontSize: '16px',
        color: '#464646'
    }
});

const Support = () => {
    const classes = useStyles();
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
                        <img alt="admin" src="/src/img/imgadmin.png" />
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
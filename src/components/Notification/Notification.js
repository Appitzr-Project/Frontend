import { Component } from 'react';
import classes from './Notification.module.css';
import Container from '@material-ui/core/Container';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LocalAtmTwoToneIcon from '@material-ui/icons/LocalAtmTwoTone';
import LocalOfferTwoToneIcon from '@material-ui/icons/LocalOfferTwoTone';
import CheckTwoToneIcon from '@material-ui/icons/CheckTwoTone';

class Notification extends Component {
  render() {
    return (
      <div className="App" style={{background:'#E5E5E5'}}>        
        <Container maxWidth="sm" className={classes.container}>
          <Grid container spacing={0} className={classes.header} >
            <Grid item xs={2} className={classes.backIconBox}>
              <NavigateBeforeIcon className={classes.backIcon} />
            </Grid>
            <Grid item xs={8} className={classes.title}>
              Notification
            </Grid>
            <Grid item xs={2}>
            </Grid>
          </Grid>
          
          <Grid container spacing={0}>
            <Grid item xs={12} className={classes.content}>
              
                <Grid container spacing={0} className={classes.notificationBox}>

                  <Grid item xs={12} className={classes.notificationItem}>                     
                    <Grid container spacing={0}>
                      <Grid item xs={2} className={classes.notificationIconBox}>
                        <Paper className={classes.notificationIconBackground} style={{background: 'rgba(221, 46, 37, 0.15)'}}>
                          <LocalAtmTwoToneIcon className={classes.notificationIcon} style={{ color: '#FB5A47'}} />
                        </Paper>
                      </Grid>
                      <Grid item xs={10}>
                        <h3 className={classes.notificationTitle}>Transaction Complete</h3>
                        <p className={classes.notificationText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>                  
                      </Grid>
                    </Grid>                     
                  </Grid>

                  <Grid item xs={12} className={classes.notificationItem}>                     
                    <Grid container spacing={0}>
                      <Grid item xs={2} className={classes.notificationIconBox}>
                        <Paper className={classes.notificationIconBackground} style={{background: 'rgba(82, 99, 200, 0.15)'}}>
                          <LocalOfferTwoToneIcon className={classes.notificationIcon} style={{ color: '#5263C8'}} />
                        </Paper>
                      </Grid>
                      <Grid item xs={10}>
                        <h3 className={classes.notificationTitle}>Get 3 Free Coupons Now !</h3>
                        <p className={classes.notificationText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>                  
                      </Grid>
                    </Grid>                     
                  </Grid>

                  <Grid item xs={12} className={classes.notificationItem}>                     
                    <Grid container spacing={0}>
                      <Grid item xs={2} className={classes.notificationIconBox}>
                        <Paper className={classes.notificationIconBackground} style={{background: 'rgba(82, 99, 200, 0.15)'}}>
                          <LocalOfferTwoToneIcon className={classes.notificationIcon} style={{ color: '#5263C8'}} />
                        </Paper>
                      </Grid>
                      <Grid item xs={10}>
                        <h3 className={classes.notificationTitle}>Only Today!</h3>
                        <p className={classes.notificationText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>                  
                      </Grid>
                    </Grid>                     
                  </Grid>

                  <Grid item xs={12} className={classes.notificationItem}>                                      
                    <Grid container spacing={0}>
                      <Grid item xs={2} className={classes.notificationIconBox}>
                        <Paper className={classes.notificationIconBackground} style={{background: 'rgba(29, 151, 139, 0.15)'}}>
                          <CheckTwoToneIcon className={classes.notificationIcon} style={{ color: '#1D978B'}} />
                        </Paper>
                      </Grid>
                      <Grid item xs={10}>
                        <h3 className={classes.notificationTitle}>Transaction Complete</h3>
                        <p className={classes.notificationText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>                  
                      </Grid>
                    </Grid>  
                  </Grid>

                </Grid>
              
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Notification;

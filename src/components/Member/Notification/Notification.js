import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";
import CheckTwoToneIcon from '@material-ui/icons/CheckTwoTone';
import LocalAtmTwoToneIcon from '@material-ui/icons/LocalAtmTwoTone';
import LocalOfferTwoToneIcon from '@material-ui/icons/LocalOfferTwoTone';
import { useHistory } from 'react-router';
import Wrapper from "../../shared/NavbarWithProfile/Wrapper";
import Wrapper from "../../shared/Wrapper";

const useStyle = makeStyles((theme) => ({
  notificationItem: {
    marginTop: '24px',
    padding: '12px',
    borderRadius: '15px',
    boxShadow: '0px 4px 4px rgba(71, 71, 71, 0.1)',
  }, 
  notificationIconBox: {
    display: 'flex',
    justifyContent: 'center',
  },
  notificationIconBackground: {
    borderRadius: '50%',
    boxShadow: 'none',
    height: '58px',
    width: '58px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationIcon: {
    fontSize: '40px',
    verticalAlign: 'middle',
  },
  notificationTextBox: {
    paddingLeft: '5px',
  },
  notificationTitle: {
    color: '#0E0E0E',
    fontWeight: '700',
    fontSize: '24px',
  },
  notificationText: {
    color: '#999999',
    fontWeight: '400',
    fontSize: '24px',
  }
}));

const Notification = () => {
  const classes = useStyle();
  const history=useHistory()
    return (       
        <Container maxWidth="sm" className={classes.container}>
          
          <Wrapper
            title="Notification"
            image="https://source.unsplash.com/random"
            isBack
            icon={()=>history.push('/')}
          >          
            <Grid container spacing={0}>
              <Grid item xs={12}>
                
                  <Grid container spacing={0}>

                    <Grid item xs={12} className={classes.notificationItem}>                     
                      <Grid container spacing={0}>
                        <Grid item xs={2} className={classes.notificationIconBox}>
                          <Paper className={classes.notificationIconBackground} style={{background: 'rgba(221, 46, 37, 0.15)'}}>
                            <LocalAtmTwoToneIcon className={classes.notificationIcon} style={{ color: '#FB5A47'}} />
                          </Paper>
                        </Grid>
                        <Grid item xs={10} className={classes.notificationTextBox}>
                          <h2 className={classes.notificationTitle}>Transaction Complete</h2>
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
                        <Grid item xs={10} className={classes.notificationTextBox}>
                          <h2 className={classes.notificationTitle}>Get 3 Free Coupons Now !</h2>
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
                        <Grid item xs={10} className={classes.notificationTextBox}>
                          <h2 className={classes.notificationTitle}>Only Today!</h2>
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
                        <Grid item xs={10} className={classes.notificationTextBox}>
                          <h2 className={classes.notificationTitle}>Transaction Complete</h2>
                          <p className={classes.notificationText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>                  
                        </Grid>
                      </Grid>  
                    </Grid>

                  </Grid>
                
              </Grid>
            </Grid>
          </Wrapper>
        </Container>
    );
}

export default Notification;

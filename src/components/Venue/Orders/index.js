import React, { lazy, Suspense } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Grid, Container }
  from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useHistory } from 'react-router-dom';
const ListOrder = lazy(() => import('./ListOrder'));

const useStyle = makeStyles((theme) => ({
  wrapper: {
    minHeight: '100vh',
    background: '#fff',
  },
  appBar: {
    boxShadow: '0 0'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontWeight: '600',
    fontSize: '30px'
  }
}));

const Orders = () => {
  const classes = useStyle();
  const history = useHistory();

  const onBack = () => history.push('/venue')

  return (
    <Container maxWidth='sm'  justify='flex-start' className={classes.wrapper}>
      <Grid item   >
        <AppBar position='static' color='transparent' className={classes.appBar} >
          <Toolbar>
            <IconButton edge='start' onClick={onBack } className={classes.menuButton} color='inherit' aria-label='back'>
              <ArrowBackIosIcon />
            </IconButton>
            <Typography variant='h6' align='center' className={classes.title}>
              Order
            </Typography>
          </Toolbar>
        </AppBar>
      </Grid>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/venue/orders" component={ListOrder} />
            {/* <Route exact path="/venue/order-detail" component={ListOrder} /> */}
          </Switch>
        </Suspense>
      </Router>
    </Container>
  );
};

export default Orders;

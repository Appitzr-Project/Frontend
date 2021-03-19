import { Button, Card, Grid, makeStyles, TextField } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  coupon: {
    height: '55px',
  },
  couponWrapper: {
    borderRadius: '10px',
  },
  apply: {
    textTransform: 'none',
    height: '48px',
    backgroundColor: '#7B00AB',
    color: '#ffffff',
  },
  alignRight: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    alignItems: 'baseline',
  },
});

const CouponApply = () => {
  const classes = useStyles();

  return (
    <Card elevation={0} component="form">
      <Grid container className={classes.coupon}>
        <Grid item xs className={classes.couponWrapper}>
          <TextField
            className={classes.input}
            fullWidth
            label="Enter your coupon"
          />
        </Grid>
        <Grid item xs={3} className={classes.alignRight}>
          <Button fullWidth variant="contained" className={classes.apply}>
            Apply
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CouponApply;

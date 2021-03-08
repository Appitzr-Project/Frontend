import { Button, Card, Grid, InputBase, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  coupon: {
    height: '55px',
  },
  couponWrapper: {
    background: 'rgba(243, 243, 243, 0.7)',
    borderRadius: '10px',
  },
  input: {
    marginTop: '11px',
    marginLeft: '11px',
  },
  apply: {
    textTransform: 'none',
    height: '55px',
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
          <InputBase
            className={classes.input}
            fullWidth
            placeholder="Enter your coupon"
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

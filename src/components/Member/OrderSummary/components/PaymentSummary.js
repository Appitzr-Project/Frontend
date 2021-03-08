import { Box, Card, Divider, Grid, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  paymentCard: {
    boxShadow: '0px 4px 4px rgba(71, 71, 71, 0.1)',
    borderRadius: '15px',
    marginTop: '24px',
  },
  paymentContainer: {
    padding: '18px',
  },
});

const PaymentSummary = () => {
  const classes = useStyles();

  return (
    <Card elevation={0} className={classes.paymentCard}>
      <Grid container direction="column" className={classes.paymentContainer}>
        <Grid item>
          <Box fontWeight={600} fontSize={18} mb={4}>
            Payment Summary
          </Box>
        </Grid>
        <Grid item>
          <Grid container justify="space-between">
            <Box fontSize={14} mb={3}>
              Subtotal
            </Box>
            <Box fontWeight={600} fontSize={20}>
              $103
            </Box>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container justify="space-between">
            <Box fontSize={14} mb={3}>
              Discount
            </Box>
            <Box fontWeight={600} fontSize={20}>
              -
            </Box>
          </Grid>
        </Grid>
        <Divider />
        <Grid item>
          <Grid container justify="space-between">
            <Box fontWeight={700} fontSize={18} mt={2}>
              Total Payment
            </Box>
            <Box fontWeight={700} fontSize={22} mt={2}>
              $103
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default PaymentSummary;

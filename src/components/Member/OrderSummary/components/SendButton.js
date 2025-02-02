import { Box, Button, Grid, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  btnSendOrder: {
    textTransform: 'none',
    height: '55px',
    color: '#ffffff',
    bottom: 56,
    width: 'calc(100% - 48px)',
    margin: '5% auto',
    left: 0,
    right: 0,
    position: 'fixed',
    maxWidth: '568px',
    boxShadow: '0px -5px 5px rgb(119 118 118 / 21%)',
    background: '#20D3C2',
    borderRadius: '18px',
  },
});

const SendButton = () => {
  const classes = useStyles();

  return (
    <Button variant="contained" className={classes.btnSendOrder}>
      <Grid container justify="space-between" alignItems="center">
        <Box fontWeight={600} fontSize={20}>
          Send Order
        </Box>
        <Box fontWeight="fontWeightBold" fontSize={24} color="#000000">
          $103
        </Box>
      </Grid>
    </Button>
  );
};

export default SendButton;

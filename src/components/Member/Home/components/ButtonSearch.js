import { Box, Button, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  btnBox: {
    textAlign: 'center',
  },
  btnSendOrder: {
    textTransform: 'none',
    height: '55px',
    color: '#ffffff',    
    width: 'calc(100% - 48px)',
    margin: '5% auto',    
    maxWidth: '568px',
    boxShadow: '0px -5px 5px rgb(119 118 118 / 21%)',
    background: '#20D3C2',
    borderRadius: '18px',
    // Uncomment to make it float again
    // left: 0,
    // right: 0,
    // position: 'fixed',
    // bottom: 56,
  },
});

const ButtonSearch = () => {
  const classes = useStyles();

  return (
    <Box pl="24px" pr="24px"  className={classes.btnBox}>
      <Button variant="contained" fullWidth className={classes.btnSendOrder}>
        <Box fontWeight={600} fontSize={20}>
          Search
        </Box>
      </Button>
    </Box>
  );
};

export default ButtonSearch;

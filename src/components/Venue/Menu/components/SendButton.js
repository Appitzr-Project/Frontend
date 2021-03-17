import React from 'react'
import { Link } from 'react-router-dom'
import { Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  btnSendOrder: {
    textTransform: 'none',
    height: '55px',
    color: '#ffffff',
    bottom: 24,
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
    <Link to='/venue/menu/add'>
      <Button variant='contained' className={classes.btnSendOrder}>
        Add New Menu
      </Button>
    </Link>
  );
};

export default SendButton

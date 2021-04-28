import { Box, Grid, makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signOutAction } from '../../../../redux/actions/auth.action';

const useStyles = makeStyles({
  btnActionGroup: {
    padding: '8px 24px',
  },

  btnOk: {
    textTransform: 'none',
    height: '55px',
    color: '#ffffff',
    margin: '5% auto',
    maxWidth: '568px',
    background: '#FF4646',
    borderRadius: '5px',
  },
  btnCancel: {
    textTransform: 'none',
    height: '55px',
    color: '#C1C1C1',
    margin: '5% auto',
    maxWidth: '568px',
    background: '#EBEBEB',
    borderRadius: '5px',
  },
  question: {
    color: '#7A7A7A',
  },
});

const ConfirmationDialog = ({ id, keepMounted, open, onClick, onClose }) => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const history = useHistory()

  const onLogout = () => {
    dispatch(signOutAction()).then(() => {
      onClose()
      history.push('/login')
    })
  }

  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="xs"
      aria-labelledby="confirmation-dialog-title"
      open={open}
    >
      <DialogTitle id="confirmation-dialog-title">Logout</DialogTitle>
      <DialogContent>
        <Box fontSize="16px" className={classes.question}>
          Are you sure you want to logout now?
        </Box>
      </DialogContent>
      <DialogActions className={classes.btnActionGroup}>
        <Grid container justify="space-between">
          <Grid item xs={5}>
            <Button fullWidth onClick={onClose} className={classes.btnCancel}>
              Cancel
            </Button>
          </Grid>
          <Grid item xs={5}>
            <Button fullWidth onClick={onLogout} className={classes.btnOk}>
              OK
            </Button>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;

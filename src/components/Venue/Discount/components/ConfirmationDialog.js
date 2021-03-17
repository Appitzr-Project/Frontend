import { Box, Grid, makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import React from 'react';

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
    color: '#ffffff',
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
  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="xs"
      aria-labelledby="confirmation-dialog-title"
      open={open}
    >
      <DialogTitle id="confirmation-dialog-title">Delete Coupon</DialogTitle>
      <DialogContent>
        <Box fontSize="16px" className={classes.question}>
          are you sure want delete this item?
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
            <Button fullWidth onClick={onClose} className={classes.btnOk}>
              Delete
            </Button>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;

import {
    Box,
    Button,
    Card,
    Container,
    makeStyles,
    TextField
} from '@material-ui/core';
import React, { useState } from 'react';
import NavBar from '../../NavBar';
import ProfPic from './assets/pic.png';
import ConfirmationDialog from './components/ConfirmationDialog';

const useStyles = (img) =>
  makeStyles({
    containerRoot: {
      background: 'linear-gradient(90deg, #5263C8 0%, #303C83 100%)',
    },
    cardRoot: {
        padding: '32px 24px 0 24px',
        marginTop: '24px',
        borderRadius: '50px 50px 0 0',
        height: 'calc(100vh - 105px)',
    },
    bgPercentage: {
      backgroundColor: '#40F27C',
      height: '87px',
      minWidth: '86px',
    },
    discountCard: {
      borderRadius: '15px',
      boxShadow: '0px 4px 4px rgba(71, 71, 71, 0.1)',
    },
    buttonSave: {
      textTransform: 'none',
      backgroundColor: '#20D3C2',
      color: '#FFFFFF',
      maxWidth: '366px',
      width: 'calc(100vw - 48px)',
      height: '56px',
      borderRadius: '18px',
      fontSize: '18px',
      fontWeight: '600',
    },
    buttonRemove: {
      textTransform: 'none',
      backgroundColor: '#C94130',
      color: '#FFFFFF',
      maxWidth: '366px',
      width: 'calc(100vw - 48px)',
      height: '56px',
      borderRadius: '18px',
      fontSize: '18px',
      fontWeight: '600',
    },
    textField: {
      textTransform: 'none',
    },
  });

const DiscountEdit = () => {
  const classes = useStyles()();
  const [displayDialog, setDisplayDialog] = useState(false);

  return (
    <>
      <Container
        classes={{ root: classes.containerRoot }}
        maxWidth="sm"
        disableGutters
      >
        <NavBar title="Edit Discount" src={ProfPic} />
        <Card classes={{ root: classes.cardRoot }} elevation={0}>
          <Box pb="24px">
            <TextField
              label="Coupon Code"
              defaultValue="GIFTDAY2021"
              fullWidth
            />
          </Box>
          <Box
            pb="24px"
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <TextField
              id="startDate"
              label="Start Date"
              type="date"
              defaultValue="01/03/2021"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="endDate"
              label="End Date"
              type="date"
              defaultValue="31/03/2021"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
          <Box pb="24px">
            <TextField
              label="Discount Amount(%)"
              type="number"
              defaultValue="10"
              fullWidth
            />
          </Box>
          <Box pb="24px">
            <TextField
              label="Discount Maximum Amount($)"
              type="number"
              defaultValue="15"
              fullWidth
            />
          </Box>
          <Box pb="24px">
            <TextField
              label="Minimum Order ($)"
              type="number"
              defaultValue="100"
              fullWidth
            />
          </Box>
          <Box display="flex" justifyContent="center" pb="24px">
            <Button variant="contained" className={classes.buttonSave}>
              Save Discount
            </Button>
          </Box>
          <Box display="flex" justifyContent="center">
            <Button
              variant="contained"
              className={classes.buttonRemove}
              onClick={() => setDisplayDialog(true)}
            >
              Remove Discount
            </Button>
          </Box>
        </Card>
        <ConfirmationDialog
          id="deleteCoupon"
          keepMounted={true}
          open={displayDialog}
          onClick={() => {}}
          onClose={() => setDisplayDialog(false)}
        />
      </Container>
    </>
  );
};

export default DiscountEdit;

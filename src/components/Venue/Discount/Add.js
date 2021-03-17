import {
    Box,
    Button,
    Card,
    Container,
    makeStyles,
    TextField
} from '@material-ui/core';
import React from 'react';
import NavBar from '../../NavBar';
import ProfPic from './assets/pic.png';

const useStyles = (img) =>
  makeStyles({
    containerRoot: {
      background: 'linear-gradient(90deg, #5263C8 0%, #303C83 100%)',
    },
    cardRoot: {
      padding: '32px 24px 200px 24px',
      marginTop: '24px',
      borderRadius: '50px 50px 0 0',
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
    textField: {
      textTransform: 'none',
    },
  });

const DiscountAdd = () => {
  const classes = useStyles()();

  return (
    <>
      <Container
        classes={{ root: classes.containerRoot }}
        maxWidth="sm"
        disableGutters
      >
        <NavBar title="Add Discount" src={ProfPic} />
        <Card classes={{ root: classes.cardRoot }} elevation={0}>
          <Box pb="24px">
            <TextField
              label="Coupon Code"
              placeholder="GIFTDAY2021"
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
              placeholder="DD/MM/YYY"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="endDate"
              label="End Date"
              type="date"
              placeholder="DD/MM/YYY"
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
              placeholder="10"
              fullWidth
            />
          </Box>
          <Box pb="24px">
            <TextField
              label="Discount Maximum Amount($)"
              type="number"
              placeholder="15"
              fullWidth
            />
          </Box>
          <Box pb="24px">
            <TextField
              label="Minimum Order ($)"
              type="number"
              placeholder="100"
              fullWidth
            />
          </Box>
          <Box display="flex" justifyContent="center">
            <Button variant="contained" className={classes.buttonSave}>
              Save Discount
            </Button>
          </Box>
        </Card>
      </Container>
    </>
  );
};

export default DiscountAdd;

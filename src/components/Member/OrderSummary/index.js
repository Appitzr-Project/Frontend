import { Card, Container, makeStyles } from '@material-ui/core';
import React from 'react';
import BottomNav from '../../BottomNav';
import { MENU } from '../../BottomNav/const';
import NavBar from '../../NavBar';
import Spaghetti from './assets/spaghetti.png';
import CouponApply from './components/CouponApply';
import MenuCard from './components/MenuCard';
import PaymentSummary from './components/PaymentSummary';
import SendButton from './components/SendButton';

const useStyles = (img) =>
  makeStyles({
    containerRoot: {
      background: 'linear-gradient(90deg, #5263C8 0%, #303C83 100%)',
    },
    cardRoot: {
      padding: '24px 24px 140px 24px',
      marginTop: '24px',
      borderRadius: '50px 50px 0 0',
    },
  });

const MemberOrderSummary = () => {
  const classes = useStyles(Spaghetti)();

  return (
    <>
      <Container
        classes={{ root: classes.containerRoot }}
        maxWidth="sm"
        disableGutters
      >
        <NavBar title="Confirm Order" />
        <Card classes={{ root: classes.cardRoot }} elevation={0}>
          <MenuCard />
          <CouponApply />
          <PaymentSummary />
        </Card>

        <SendButton />
        <BottomNav ActiveMenu={MENU.CART} />
      </Container>
    </>
  );
};

export default MemberOrderSummary;

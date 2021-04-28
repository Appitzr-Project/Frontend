import { Card,Container,makeStyles} from '@material-ui/core';
import React from 'react';
import NavBar from '../../NavBar';
import MenuCard from './MenuCard'

const useStyles=makeStyles((theme)=>({
    containerRoot: {
      background: 'linear-gradient(90deg, #5263C8 0%, #303C83 100%)',
    },
    cardRoot: {
      padding: '32px 24px 0px 24px',
      marginTop: '24px',
      borderRadius: '50px 50px 0 0',
    },
}))

const OrderHistory = () => {
  const classes = useStyles();
  return(
    <Container maxWidth="sm"  classes={{ root: classes.containerRoot }} disableGutters >
      <NavBar title="Order History" src='https://source.unsplash.com/random' />
        <Card classes={{ root: classes.cardRoot }} elevation={0}>
          <MenuCard />
        </Card>
    </Container>
    
  );
};

export default OrderHistory;

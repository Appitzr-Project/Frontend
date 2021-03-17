import { Card,Container,makeStyles} from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';
import Wrapper from '../../shared/Wrapper'
import MenuCard from './MenuCard'

const useStyles=makeStyles((theme)=>({
  cardRoot: {
    padding: '24px 24px',
    borderRadius: '50px 50px 0 0',
  },
  cardMenu:{
    boxShadow: '0px 4px 4px rgba(71, 71, 71, 0.1)',
    borderRadius: '15px',
  },
  gridWrapper: {
    height: '100%',
  },
  esKrim :{
    height:100,
    width:100,
    backgroundImage:`url(${process.env.PUBLIC_URL+'/assets/eskrim.png'})`,
    background: 'no-repeat',
  },
  Spageti :{
    height:100,
    width:100,
    backgroundImage:`url(${process.env.PUBLIC_URL+'/assets/spageti.png'})`,
    background: 'no-repeat',
  }
}))

const OrderHistory = () => {
  const classes = useStyles();
  const history=useHistory()
  return(
    <Container maxWidth="sm">
    <Wrapper
    isBack={()=>history.push('/member')}
    title="Order History"
    image="https://source.unsplash.com/random"
    >
      <Card className={classes.cardRoot } elevation={0}>
        <MenuCard />
      </Card>
    </Wrapper>
    </Container>
    
  );
};

export default OrderHistory;

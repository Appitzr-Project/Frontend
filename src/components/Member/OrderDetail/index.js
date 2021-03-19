import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Wrapper from "../../shared/Wrapper";
import OrderItem from "./OrderItem";

const useStyle = makeStyles((theme) => ({
  title: {
    fontSize: "22px",
    fontWeight: "600"
  },

  subtitle: {
    color: "#7B7B7B",
    fontSize: "16px",
    fontWeight: "400"
  },

  complete: {
    color: '#11B151',
    ontSize: "18px",
    fontWeight: "600",
    marginTop: "20px"
  },
  
  qrCode: {
    width: "224px",
    height: "224px",
    margin: "0 auto"
  }
}));

const MemberOrderDetail = () => {
  const classes = useStyle();
  return (
    <>
    <Wrapper 
      title="Order Detail"
      image="https://source.unsplash.com/random"
      isBack="/member/order/history"
    >
      <Typography align="center" className={classes.title}>Restaurant Hubert</Typography>
      <Typography align="center" className={classes.subtitle}>26-february-2021, 19:54 PM</Typography>
      <Typography align="center" className={classes.complete}>Complete</Typography>

      <OrderItem />

      <div className={classes.qrCode} >
        <img alt="" src="/src/img/QRCODE.svg" style={{width:"100%", height:"100%"}} />
      </div>

    </Wrapper>
    </>
  )
}

export default MemberOrderDetail;

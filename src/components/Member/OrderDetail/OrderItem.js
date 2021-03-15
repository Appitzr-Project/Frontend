import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  title: {
    fontSize: "22px",
    fontWeight: "600"
  },

  subtitle: {
    color: "#7B7B7B",
    fontSize: "16px",
    fontWeight: "400"
  }
}));

const OrderItem = (props) => {
  const classes = useStyle();
  
  return (
    <>
      order items
    </> 
  )
}

export default OrderItem

import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  order:{
    width: "100%", 
    margin: "15px auto",
    borderRadius: "15px",
    boxShadow: "0px 4px 4px rgba(71, 71, 71, 0.1)",
    border: "1px solid #E1E1E1",
    padding: "15px 20px"
  },

  image: {
    width: "173px",
    height: "173px",
    borderRadius: "15px",
    overflow: "hidden",
    margin: "15px auto"
  },

  title: {
    fontSize: "18px",
    fontWeight: "600",
    marginTop: "10px"
  },

  category: {
    color: "#7B00AB",
    fontSize: "16px",
    fontWeight: "600"
  },

  info: {
    background : "#02A1F3",
    borderRadius: "5px",
    height: "52px",
    margin: "15px auto",
    padding: "0 10px",
    color: "#fff"
  },
  
  itemInfo : {
    fontSize: "18px",
    fontWeight: "700",
  },

  priceInfo : {
    fontSize: "22px",
    fontWeight: "800",
  },
}));

const OrderItem = () => {
  const classes = useStyle();
  
  return (
    <div className={classes.order}>
      <div className={classes.image}>
        <img src="/src/img/spageti.png" style={{width:"100%", height:"100%"}}/>
      </div>

      <Typography align="center" className={classes.category}>Spaghetti</Typography>
      <Typography align="center" className={classes.title}>Medium Spicy Spaghetti</Typography>
      
      <Grid container justify="space-between" alignItems="center" className={classes.info}>
        <Grid item className={classes.itemInfo}>1 Item</Grid>
        <Grid item className={classes.priceInfo}>$43</Grid>
      </Grid>

    </div> 
  )
}

export default OrderItem

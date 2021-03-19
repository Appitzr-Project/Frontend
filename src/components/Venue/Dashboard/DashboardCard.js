import React from "react";
import { Avatar, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  wrap:{
    background: "#272D51",
    borderRadius: "15px",
    padding: "10px",
    marginTop: "25px",
  },

  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    [theme.breakpoints.down("xs")]: {
      width: theme.spacing(5),
      height: theme.spacing(5),
    }
  },

  title: {
    fontSize: "20px",
    fontWeight: "400",
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
    }
  },

  price: {
    fontSize: "20px", 
    color: "#4caa9f",
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
    }
  },

  date: {
    fontSize: "13px",
    fontWeight: "400",
    color: "#a3a3a3",
  }
}));

const DashboardCard = () => {
  const classes = useStyle();
  return (
    <Grid
      container
      className={classes.wrap}
    >
      <Grid container item xs={10}>
        <Grid item sm={2} xs={3}>
          <Avatar
            alt=""
            src="https://source.unsplash.com/random"
            className={classes.avatar}
          />
        </Grid>
        <Grid item sm={10} xs={9}>
         <Typography className={classes.title}>
          Tony Ross
          </Typography>
          <Typography className={classes.date}>
            12 sep 2020
          </Typography>
        </Grid>
      </Grid>
       
      <Grid item xs={2}>
        <Typography className={classes.price}>
          $123.00
        </Typography>
      </Grid>
    </Grid>
  );
};

export default DashboardCard;

import React from "react";
import { Avatar, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  wrap:{
    background: "#272D51",
    borderRadius: "15px",
    padding: "10px",
    marginTop: "25px",
  }
}));

const DashboardCard = () => {
  const classes = useStyle();
  return (
    <Grid
      container
      className={classes.wrap}
    >
      <Grid item xs={2}>
        <Avatar
          alt=""
          src="https://source.unsplash.com/random"
          style={{ width: "78px", height: "78px" }}
        />
      </Grid>
      <Grid item xs={8}>
        <Typography style={{ fontSize: "20px", fontWeight: "400" }}>
          Tony Ross
        </Typography>
        <Typography
          style={{ fontSize: "13px", fontWeight: "400", color: "#a3a3a3" }}
        >
          12 sep 2020
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography style={{ fontSize: "20px", color: "#4caa9f" }}>
          $123.00
        </Typography>
      </Grid>
    </Grid>
  );
};

export default DashboardCard;

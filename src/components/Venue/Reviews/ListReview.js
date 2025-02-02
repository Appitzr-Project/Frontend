import {
  Avatar, Grid, Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import StarIcon from "@material-ui/icons/Star";
import React from "react";
const useStyle = makeStyles((theme) => ({
  listReview: {
    borderRadius: "20px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
    marginTop: "30px",
  },

  sizeAvatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },

  replyInput: {
    background: "#f3f3f3",
    marginTop: "11px",
    marginBottom: "15px",
  },

  submitReply: {
    background: "#20D3C2",
    width: "82px",
    height: "27px",
    borderRadius: "18px",
    marginBottom: "16px",
  },

  leftEl: {
    display: "flex",
    justifyContent: "center",
  },

  centerEl: {
    display: "flex",
    justifyContent: "space-between",
  },

  name: {
    fontWeight: "700",
    fontSize: "14px",
  },

  date: {
    fontSize: "11px",
    fontWeight: "400",
  },

  starWrap: {
    display: "flex",
    alignItem: "center",
    fontSize: "11px",
  },
  rating: {
    marginTop: "4px",
    marginLeft: "6px",
    fontWeight: "700",
  },

  reviewDesc: {
    fontSize: "11px",
    fontWeight: "400 ",
  },

  replyBtn:{
    fontSize: "14px",
    fontWeight: "600",
    marginTop: "15px",
    float: "right",
    color: "#5263C8",
    cursor: "pointer",
  }
}));

const ListReview = () => {
  const classes = useStyle();

  return (
    <Grid container spacing={2} className={classes.listReview}>
      <Grid item xs={2} >
        <div className={classes.leftEl}>
          <Avatar
            alt=""
            src="https://source.unsplash.com/random"
            className={classes.sizeAvatar}
          />
        </div>
      </Grid>
      <Grid item xs={10}>
        <div className={classes.centerEl}>
          <Typography variant="h6" className={classes.name}>
            John Doe
          </Typography>
          <Typography className={classes.date}>4 Days ago</Typography>
        </div>
        <Typography className={classes.starWrap}>
          <StarIcon fontSize="small" htmlColor="#FF7F23" />
          <StarIcon fontSize="small" htmlColor="#FF7F23" />
          <StarIcon fontSize="small" htmlColor="#FF7F23" />
          <StarIcon fontSize="small" htmlColor="#FF7F23" />
          <span className={classes.rating}>4.0</span>
        </Typography>

        <Typography className={classes.reviewDesc}>
          This cozy restaurant has left the best impressions! Hospitable hosts,
          delicious dishes, beautiful presentation, wide wine list and wonderful
          dessert.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ListReview;

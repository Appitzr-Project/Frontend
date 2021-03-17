import React from "react";
import { useHistory } from "react-router-dom";
import { Typography, Avatar, Grid } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  wrapHeaderContent: {
    height: "130px",
  },
  arrowBack: {
    color: "#fff",
    fontSize: "21px",
    fontWeight: "600",
    cursor: "pointer",
  },
  wrapTitle: {
    color: "#fff",
    fontSize: "26px",
  },
  sizeAvatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
}));

const Header = (props) => {
  const classes = useStyle();
  const history = useHistory();

  return (
    <Grid container className={classes.wrapHeaderContent} alignItems="center">
      <Grid item xs={props.isBack && 2}>
        {props.isBack && (
          <ArrowBackIosIcon
            onClick={() => history.push(props.isBack)}
            className={classes.arrowBack}
          />
        )}
      </Grid>

      <Grid item xs={props.isBack ? 8 : 10}>
        <Typography
          variant="h5"
          className={classes.wrapTitle}
          align={props.isBack ? "center" : "left"}
        >
          {props.title}
        </Typography>
      </Grid>

      <Grid item xs={2}>
        <div style={{ float: "right" }}>
          {props.image && (
            <Avatar alt="" src={props.image} className={classes.sizeAvatar} />
          )}
        </div>
      </Grid>
    </Grid>
  );
};

export default Header;

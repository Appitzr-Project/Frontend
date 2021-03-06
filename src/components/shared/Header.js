import React from "react";
import { useHistory } from "react-router-dom";
import { Typography, Avatar, Container, Grid } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import useStyle from "../../style";

const Header = (props) => {
  const classes = useStyle();
  const history = useHistory();

  return (
    <Grid container className={classes.wrapHeaderContent} alignItems="center">
      <Grid item xs={props.isBack && 2}>
        {props.isBack && (
          <ArrowBackIosIcon
            onClick={() => history.push("/")}
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

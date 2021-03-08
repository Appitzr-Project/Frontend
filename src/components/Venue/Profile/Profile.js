import React from "react";
import { useHistory } from "react-router-dom";
import { TextField, Typography, Button } from "@material-ui/core";
import Wrapper from "../../shared/Wrapper";
import useStyle from "../../../style";

const Profile = () => {
  const classes = useStyle();

  return (
    <>
      <Wrapper
        title="Profile"
        image="https://source.unsplash.com/random"
        isBack
      >
        <form>
          <div className={classes.formControl}>
            <Typography className={classes.inputLabel}>Name</Typography>
            <TextField className={classes.input} variant="outlined" fullWidth />
          </div>
          <div className={classes.formControl}>
            <Typography className={classes.inputLabel}>Email</Typography>
            <TextField className={classes.input} variant="outlined" fullWidth />
          </div>

          <Typography
            style={{
              fontSize: "18px",
              fontWeight: " 600",
              margin: "33px 0 25px 0",
            }}
          >
            Bank Details
          </Typography>

          <div className={classes.formControl}>
            <Typography className={classes.inputLabel}>Account Name</Typography>
            <TextField className={classes.input} variant="outlined" fullWidth />
          </div>

          <div className={classes.formControl}>
            <Typography className={classes.inputLabel}>Bank</Typography>
            <TextField className={classes.input} variant="outlined" fullWidth />
          </div>

          <div className={classes.formControl}>
            <Typography className={classes.inputLabel}>
              Account Number
            </Typography>
            <TextField className={classes.input} variant="outlined" fullWidth />
          </div>

          <Button
            variant="outlined"
            className={classes.submitBtn}
            disableRipple
            fullWidth
          >
            Submit
          </Button>
        </form>
      </Wrapper>
    </>
  );
};

export default Profile;

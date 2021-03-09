import React from "react";
import { TextField, Typography, Button } from "@material-ui/core";
import Wrapper from "../../shared/Wrapper";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  inputLabel: {
    fontSize: "16px",
    fontWeight: "400",
    marginBottom: "5px",
  },
  formControl: {
    marginBottom: "20px",
  },

  input: {
    background: "#f3f3f3",
  },

  submitBtn: {
    backgroundColor: "#20D3C2",
    borderRadius: "18px",
    height: "71px",
    fontSize: "18px",
    fontWeight: "600",
    "&:hover": {
      backgroundColor: "#20D3C2",
    },
  },
}));

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
            <TextField
              className={classes.input}
              variant="outlined"
              fullWidth
              size="small"
            />
          </div>
          <div className={classes.formControl}>
            <Typography className={classes.inputLabel}>Email</Typography>
            <TextField
              className={classes.input}
              variant="outlined"
              fullWidth
              size="small"
            />
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
            <TextField
              className={classes.input}
              variant="outlined"
              fullWidth
              size="small"
            />
          </div>

          <div className={classes.formControl}>
            <Typography className={classes.inputLabel}>Bank</Typography>
            <TextField
              className={classes.input}
              variant="outlined"
              fullWidth
              size="small"
            />
          </div>

          <div className={classes.formControl}>
            <Typography className={classes.inputLabel}>
              Account Number
            </Typography>
            <TextField
              className={classes.input}
              variant="outlined"
              fullWidth
              size="small"
            />
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

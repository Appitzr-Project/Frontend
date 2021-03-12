import React from "react";
import { TextField, Typography, Button, Grid } from "@material-ui/core";
import Wrapper from "../../shared/NavbarWithProfile/Wrapper";
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
    color: "#fff",
    marginTop: "20px",
    "&:hover": {
      backgroundColor: "#20D3C2",
    },
  },

  qrcode :{
    margin: "60px 0 30px 0"
  },

  sendEmail:{
    fontWeight: "600",
    fontSize: "15px",
    color: "#540174",
    cursor: "pointer",
    textDecoration : "underline"
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

          <div className={classes.formControl}>
            <Typography className={classes.inputLabel}>Phone Number</Typography>
            <TextField
              className={classes.input}
              variant="outlined"
              fullWidth
              size="small"
            />
          </div>

          <div className={classes.formControl}>
            <Typography className={classes.inputLabel}>Postal Code</Typography>
            <TextField
              className={classes.input}
              variant="outlined"
              fullWidth
              size="small"
            />
          </div>

          <div className={classes.formControl}>
            <Typography className={classes.inputLabel}>Location</Typography>
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
            <Typography className={classes.inputLabel}>Bank Bsb</Typography>
            <TextField
              className={classes.input}
              variant="outlined"
              fullWidth
              size="small"
            />
          </div>

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
          
          <Grid container direction="column" alignItems="center" justify="center" className={classes.qrcode}>
            <Grid item>
              <img alt="mantap" src="/src/img/QRCODE.svg" />
            </Grid>
            <Grid item>
              <div className={classes.sendEmail}>
              Send to email
              </div>
            </Grid>
          </Grid>

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

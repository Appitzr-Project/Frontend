import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography, TextField, Grid } from "@material-ui/core";
import Wrapper from "../shared/Wrapper";

const useStyle = makeStyles((theme) => ({
  inputLabel: {
    fontSize: "16px",
    fontWeight: "400",
    marginBottom: "5px",
    color: "#464646"
  },

  formControl: {
    marginBottom: "10px",
  },

  input: {
    background: "#f3f3f3",
    borderRadius: "5px",
  },
}));

const inputStyle = {fontSize:16, padding:5};

const DiscountInfo = () => {
  const classes = useStyle();

  return (
    <Wrapper
      title="Discount Info"
      image="https://source.unsplash.com/random"
      isBack 
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className={classes.formControl}>
            <Typography className={classes.inputLabel}>Coupon Code</Typography>
            <TextField
              InputProps={{style:inputStyle, className: classes.input, disableUnderline: true }}
              variant="standard"
              fullWidth
              size="small"
              defaultValue="GIFTDAY2021"
            />
          </div>
        </Grid>
        
        <Grid item xs={6}>
          <div className={classes.formControl}>
            <Typography className={classes.inputLabel}>Start Date</Typography>
            <TextField
              InputProps={{style:inputStyle, className: classes.input, disableUnderline: true }}
              variant="standard"
              fullWidth
              size="small"
              defaultValue="21/03/2021"
            />
          </div>
        </Grid>

        <Grid item xs={6}>
          <div className={classes.formControl}>
            <Typography className={classes.inputLabel}>End Date</Typography>
            <TextField
              InputProps={{style:inputStyle, className: classes.input, disableUnderline: true }}
              variant="standard"
              fullWidth
              size="small"
              defaultValue="30/03/2021"
            />
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className={classes.formControl}>
            <Typography className={classes.inputLabel}>Discount Amount (%)</Typography>
            <TextField
              InputProps={{style:inputStyle, className: classes.input, disableUnderline: true }}
              variant="standard"
              fullWidth
              size="small"
              defaultValue="10"
            />
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className={classes.formControl}>
            <Typography className={classes.inputLabel}>Discount Maximum Amount ($)</Typography>
            <TextField
              InputProps={{style:inputStyle, className: classes.input, disableUnderline: true }}
              variant="standard"
              fullWidth
              size="small"
              defaultValue="15$ AUD"
            />
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className={classes.formControl}>
            <Typography className={classes.inputLabel}>Minimum Order ($)</Typography>
            <TextField
              InputProps={{style:inputStyle, className: classes.input, disableUnderline: true }}
              variant="standard"
              fullWidth
              size="small"
              defaultValue="100$ AUD"
            />
          </div>
        </Grid>

      </Grid>
    </Wrapper>
  )
}

export default DiscountInfo

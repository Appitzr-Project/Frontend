import React, {useState} from 'react';
import QrReader from 'react-qr-reader';
import Wrapper from "../../shared/Wrapper";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  scanner: {
    margin: "50px 0",
    backgroundColor: "#fff"
  },

  title: {
    fontSize: "20px",
    fontWeight: "600",
    marginTop: "40px"
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

  disableBtn: {
    background: "#ddd"
  },
}));

const VenueScan = () => {
  const classes = useStyle();
  const [result, setResult] = useState('');

  const handleScan = (data) => {
    if (data) {
      setResult(data);
      window.location.href = data;
    }
  };
  const handleError = (err) => {
    console.error(err);
  };
  return (
    <Wrapper
        title="Scan QR Code"
        image="https://source.unsplash.com/random"
        isBack
    > 
      <Typography align="center" className={classes.title}>Scan Order</Typography>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        className={classes.scanner}
        // showViewFinder={false}
      />

      <Button
        variant="outlined"
        className={classes.submitBtn}
        disabled={!result}
        href={result}
        classes={{disabled: classes.disableBtn}}
        disableRipple
        fullWidth
        >
       Scan
      </Button>
    </Wrapper>
  )
}

export default VenueScan;

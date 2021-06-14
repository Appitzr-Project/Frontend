import React, { useState } from 'react';
import QrReader from 'react-qr-reader';
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, Container } from '@material-ui/core';
import NavBar from "../NavBar/index.jsx"

const useStyle = makeStyles((theme) => ({
  scanner: {
    margin: "10px 0",
    backgroundColor: "#fff"
  },

  container: {
    backgroundColor: "#fff",
    padding: "30px",
    marginTop: "60px",
    borderRadius: "5px"
  },

  title: {
    fontSize: "20px",
    fontWeight: "600",
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
    <>
      <NavBar className='header_in' />
      <Container maxWidth="sm" className={classes.container}>
        <Typography align="center" className={classes.title}>Scan Venue</Typography>
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
          classes={{ disabled: classes.disableBtn }}
          disableRipple
          fullWidth
        >
          Scan
        </Button>
      </Container>
    </>
  )
}

export default VenueScan;

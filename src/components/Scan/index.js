import { Button, Container, Grid } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { useState } from 'react';
import QrReader from 'react-qr-reader';
import BottomNav from '../BottomNav';
import { MENU } from '../BottomNav/const';
import NavBar from '../NavBar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    scanner: {
      width: '100vw',
      maxWidth: '600px',
    },
  })
);

const Scan = () => {
  const classes = useStyles();
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
      <Container maxWidth="sm" disableGutters>
        <NavBar title="Scan QR Code" />
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Grid item>
            <QrReader
              delay={300}
              onError={handleError}
              onScan={handleScan}
              className={classes.scanner}
            />

            <Grid
              style={{ paddingTop: '8px' }}
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justify="center"
            >
              <Grid item xs={12}>
                <Button variant="contained" color="primary" href={result} disabled={!result}>
                  Scan
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <BottomNav ActiveMenu={MENU.SCAN} />
      </Container>
    </>
  );
};

export default Scan;

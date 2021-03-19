import { Box, Button, Container } from '@material-ui/core';
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
    wrapper: {
      backgroundColor: '#FFFFFF',
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
        <Box mt="-24px">
          <NavBar title="Scan QR Code" />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          textAlign="center"
          height="100vh"
          className={classes.wrapper}
        >
          <Box>
            <QrReader
              delay={300}
              onError={handleError}
              onScan={handleScan}
              className={classes.scanner}
            />
          </Box>
          <Box pt="8px">
            <Button
              variant="contained"
              color="primary"
              href={result}
              disabled={!result}
            >
              Scan
            </Button>
          </Box>
        </Box>

        <BottomNav ActiveMenu={MENU.SCAN} />
      </Container>
    </>
  );
};

export default Scan;

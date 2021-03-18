import { AppBar, Avatar, Box, IconButton, Toolbar } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { ArrowBackIos } from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: '24px 0 0',
    },
    colorPrimary: {
      color: '#000000',
    },
    navbar: {
      background: 'linear-gradient(90deg, #5263C8 0%, #303C83 100%)',
    },
  })
);

export default function NavBar({ title, src = '' }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0} className={classes.navbar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => (window ? window.history.back() : {})}
          >
            <ArrowBackIos />
          </IconButton>
          <Box flexGrow={1} fontSize="30px" fontWeight="600" textAlign="center">
            {title}
          </Box>
          {src ? (
            <Avatar
              alt="pic"
              src={src}
              onClick={() => (window ? (window.location.href = '/member') : {})}
            />
          ) : null}
        </Toolbar>
      </AppBar>
    </div>
  );
}

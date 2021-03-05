import React from 'react';
import { BottomNavigation, BottomNavigationAction, makeStyles } from '@material-ui/core';
import { MENU, STROKE } from './const';
import IconCart from './Icons/IconCart';
import IconHeart from './Icons/IconHeart';
import IconHome from './Icons/IconHome';
import IconScan from './Icons/IconScan';
import IconUser from './Icons/IconUser';

const useStyles = makeStyles({
  root: {
    bottom: 0,
    position: 'absolute',
    width: '100%',
    maxWidth: '600px',
    boxShadow: '0px -5px 5px rgb(119 118 118 / 21%)',
  },
  BottomNavigationActionRoot: {
    minWidth: 'unset',
  },
});

export default function BottomNav({ ActiveMenu }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(
    Object.keys(MENU).indexOf(ActiveMenu)
  );

  const getStroke = (menu) =>
    ActiveMenu === menu ? STROKE.ACTIVE : STROKE.INACTIVE;

  const handleClick = (href) => {
    if (window) window.location.href = href;
  };

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      classes={{ root: classes.root }}
    >
      <BottomNavigationAction
        classes={{ root: classes.BottomNavigationActionRoot }}
        icon={<IconHome color={getStroke(MENU.HOME)} />}
        onClick={() => handleClick('/')}
      />
      <BottomNavigationAction
        classes={{ root: classes.BottomNavigationActionRoot }}
        icon={<IconScan color={getStroke(MENU.SCAN)} />}
        onClick={() => handleClick('/scan')}
      />
      <BottomNavigationAction
        classes={{ root: classes.BottomNavigationActionRoot }}
        icon={<IconCart color={getStroke(MENU.CART)} />}
        onClick={() => handleClick('/')}
      />
      <BottomNavigationAction
        classes={{ root: classes.BottomNavigationActionRoot }}
        icon={<IconHeart color={getStroke(MENU.HEART)} />}
        onClick={() => handleClick('/')}
      />
      <BottomNavigationAction
        classes={{ root: classes.BottomNavigationActionRoot }}
        icon={<IconUser color={getStroke(MENU.USER)} />}
        onClick={() => handleClick('/')}
      />
    </BottomNavigation>
  );
}

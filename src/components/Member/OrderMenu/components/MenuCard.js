import React, { useState } from 'react';
import { Box, Card, Grid, makeStyles, withStyles } from '@material-ui/core';
import { IButtonAdd, IClose, IHeart, IMSpaghetti } from '../assets';
import Rating from '@material-ui/lab/Rating';
import { strings } from '../utils';
import MenuItem from './MenuItem';

const CustomRating = withStyles(() => ({
  root: {
    fontSize: 24,
  },
}))(Rating);

const MenuCard = ({items,venue}) => {
  return (
    <Grid container spacing={0} direction="column">
      <Grid item xs={12}>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          flexWrap="wrap"
          alignItems="center"
          mb={3}
        >
          <Box fontSize={16} fontWeight="600" color="#0E0E0E" flexGrow={1}>
            {venue.venueName}
          </Box>
          <Box m={0.5}>
            <CustomRating readOnly name="size-small" defaultValue={1} max={1} />
          </Box>
          <Box m={0.5} color="#373737">
            4,6
          </Box>
          <Box m={0.5} color="rgb(193 193 193)">
            (45)
          </Box>
        </Box>
      </Grid>
      
      {items.length ? items.map((item, index) => <MenuItem item={item} index={index} key={index}/>) : "The venue doesn't have a menu yet"}
    </Grid>
  );
};

export default MenuCard;

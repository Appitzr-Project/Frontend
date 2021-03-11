import React, { useState } from 'react'
import { 
  Box,
  Card,
  Grid,
  makeStyles
} from '@material-ui/core'
import { IButtonAdd, IClose, IHeart, IMSpaghetti, IButtonSub } from '../assets'

const useStyles = (img) =>
  makeStyles({
    gridWrapper: {
      height: '100%',
      marginBottom: 16  
    },
    cardContainer: {
      boxShadow: '0px 4px 4px rgba(71, 71, 71, 0.1)',
      borderRadius: '15px',
    },
    gridContainer: {
      padding: '8px 8px 0 8px',
    },
    menuWrapper: {
      backgroundImage: `url(${img})`,
      background: 'no-repeat'
    },
    alignRight: {
      display: 'flex',
      justifyContent: 'flex-end',
      flexWrap: 'wrap',
      alignItems: 'baseline',
    },
    processFood: {
      backgroundColor: '#313D84',
      borderRadius: 16,
      padding: 2,
      textAlign: 'center',
      fontSize: 10,
      fontWeight: 'normal',
      color: '#ffffff'
    },
    more: {
      height: '4.5em',
      overflow: 'hidden',
      display: '-webkit-box',
      webkitBoxOrient: 'vertical',
      webkitLineClamp: 3
    }
  })

const MenuCard = () => {
  const [more, setMore] = useState(true)
  const classes = useStyles(IMSpaghetti)();

  return (
    <Grid container spacing={0} direction='column'>
      {Array.from({ length: 5 }).map((item, index) =>
        <Grid item className={classes.gridWrapper} key={index + 1}>
          <Card elevation={0} className={classes.cardContainer}>
            <Grid container className={classes.gridContainer}>
              <Grid item xs={3} className={classes.menuWrapper}>
                <Box p={1} mb={7}>
                  <IHeart color={'#F1608A'} />
                </Box>
                <Box p={1} mb={1} className={classes.processFood}>
                  Processed food
                </Box>
              </Grid>
              <Grid item xs={9}>
                <Box
                  ml={2}
                  mb={1}
                  fontSize={14}
                  display='flex'
                  flexDirection='row'
                  justifyContent='space-between'
                >
                  <Box color='#7B00AB'>
                    Spagetthi
                  </Box>
                  <Box>
                    <img alt='close' src={IClose} />
                  </Box>
                </Box>
                <Box ml={2} mb={1} fontWeight={600} fontSize={16} color='#0E0E0E'>
                  Medium Spicy Spaghetti
                </Box>
                <Box ml={2} fontSize={12} textAlign='justify' color='#9A9A9A'>
                  Lorem ipsum dolor, sit cupiditate nostrum voluptate minima...
                </Box>
                <Grid
                  container
                  justify='flex-end'
                  className={classes.gridContainer}
                >
                  <Grid item>
                    <IButtonSub
                      fill={'#EAEAEA'}
                      stroke={'#BFBFBF'}
                    />
                  </Grid>
                  <Grid item>
                    <Box fontWeight={700} fontStyle={16} mb={2} ml={3} mr={3}>
                      1
                    </Box>
                  </Grid>
                  <Grid item>
                    <img alt='add' src={IButtonAdd} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      )}
    </Grid>
  )
}

export default MenuCard

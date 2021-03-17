import React, { useState } from 'react'
import {
  Box,
  Card,
  Grid,
  makeStyles,
  withStyles
} from '@material-ui/core'
import {
  IButtonAdd,
  IClose,
  IHeart, 
  IMSpaghetti,
  IButtonSub
} from '../assets'
import Rating from '@material-ui/lab/Rating'
import { strings } from '../utils'

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
      background: 'no-repeat',
      position: 'relative'
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
      padding: 4,
      textAlign: 'center',
      fontSize: 10,
      fontWeight: 'normal',
      color: '#ffffff',
      position: 'absolute',
      bottom: 16
    },
    readMoreLine: {
      color: 'black',
      textDecoration: 'underline',
      letterSpacing: '1px',
      cursor: 'pointer',
      fontWeight: 'bold'
    },
    select: {
      position: 'relative',
      borderRadius: '10px',
      padding: '8px',
      border: '1px solid #FF3974'
    },
  })

const CustomRating = withStyles(() => ({
  root: {
    fontSize: 24
  }
}))(Rating)

const MenuCard = () => {
  const [more, setMore] = useState(true)
  const classes = useStyles(IMSpaghetti)()
  return (
    <Grid container spacing={0} direction='column'>
      <Grid item xs={12}>
        <Box
          display='flex'
          flexDirection='row'
          justifyContent='space-between'
          flexWrap='wrap'
          alignItems='center'
          mb={3}
        >
          <Box fontSize={16} fontWeight='600' color='#0E0E0E' flexGrow={1}>
            Show 345 List
          </Box>
          <Box m={0.5}>
            <select name='cars' className={classes.select}>
              <option value='volvo'>Volvo</option>
              <option value='saab'>Saab</option>
              <option value='mercedes'>Mercedes</option>
              <option value='audi'>Audi</option>
            </select>
          </Box>
        </Box>
      </Grid>
      {Array.from({ length: 5 }).map((item, index) =>
        <Grid item className={classes.gridWrapper} key={index}>
          <Card elevation={0} className={classes.cardContainer}>
            <Grid container className={classes.gridContainer}>
              <Grid item xs={3} className={classes.menuWrapper}>
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
                  <Box color='#7B00AB'>
                    Change
                  </Box>
                </Box>
                <Box ml={2} mb={1} fontWeight={600} fontSize={16} color='#0E0E0E'>
                  Medium Spicy Spaghetti
                </Box>
                <Box ml={2} fontSize={12} textAlign='justify' color='#9A9A9A'>
                  <span
                    dangerouslySetInnerHTML={{ 
                      __html: more ? `${strings.text.slice(0, 50)}...` : strings.text
                    }}
                  />
                  <a
                    href='#' 
                    rel='noopener noreferrer'
                    style={{ color: 'black', cursor: 'pointer' }}
                    onClick={(e) => {e.preventDefault(); setMore(!more)}}
                  >
                    &nbsp;<b><u>{more ? strings.show_more : strings.show_less}</u></b>
                  </a>
                </Box>
                <Box ml={2} my={2} fontSize={16} textAlign='justify' color='#5E4E63'>
                  $46
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      )}
    </Grid>
  )
}

export default MenuCard

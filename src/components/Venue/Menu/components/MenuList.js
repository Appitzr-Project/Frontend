import React, {useState} from 'react'
import {
  Box,
  Card,
  Grid,
  makeStyles,
} from '@material-ui/core'
import {
  IHeart
} from '../assets'
import { strings } from '../utils'
import { Link } from 'react-router-dom'

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
      backgroundRepeat: 'no-repeat',
      backgroundPosition: "center",
      backgroundSize: "cover",
      height: 90,
      marginBottom: 8,
      borderRadius: "18px"
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
      color: '#ffffff'
    },
    readMoreLine: {
      color: 'black',
      textDecoration: 'underline',
      letterSpacing: '1px',
      cursor: 'pointer',
      fontWeight: 'bold'
    },
  })

const MenuList = ({item, index}) => {
  const [more, setMore] = useState(true)
  const classes = useStyles(item.images[0])()
  return (
    <Grid item className={classes.gridWrapper}>
          <Card elevation={0} className={classes.cardContainer}>
            <Grid container className={classes.gridContainer}>
              <Grid item xs={3}>
                <Box className={classes.menuWrapper}>
                  <Box p={1}>
                    <IHeart color={index < 1 ? '#F1608A' : '#FFFFFF'} />
                  </Box>
                </Box>
                <Box p={1} mb={1} className={classes.processFood}>
                  {item.proteinType}
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
                    {item.category}
                  </Box>
                  <Link to={"/venue/menu/edit/"+item.id}>
                    <Box color='#7B00AB'>
                      Update
                    </Box>
                  </Link>
                </Box>
                <Box ml={2} mb={1} fontWeight={600} fontSize={16} color='#0E0E0E'>
                  {item.productName}
                </Box>
                <Box ml={2} fontSize={12} textAlign='justify' color='#9A9A9A'>
                  <span
                    dangerouslySetInnerHTML={{ 
                      __html: item.description.length > 100 && more ? `${item.description.slice(0, 100)}...` : item.description
                    }}
                    
                  />
                  {item.description.length > 100 && (
                    <Link
                    to=''
                    style={{ color: 'black', cursor: 'pointer' }}
                    onClick={(e) => { e.preventDefault(); setMore(!more) }}
                  >
                    &nbsp;<b><u>{more ? strings.show_more : strings.show_less}</u></b>
                  </Link>
                  )}
                </Box>
                <Box ml={2} my={2} fontSize={16} textAlign='justify' color='#5E4E63'>
                  ${item.price}
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Grid>
  )
}

export default MenuList

import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { IButtonAdd, IClose, IHeart, IMSpaghetti } from '../assets';
import { Box, Card, Grid, makeStyles, withStyles } from '@material-ui/core';
import { strings } from '../utils';

const useStyles = (img) =>
  makeStyles({
    gridWrapper: {
      height: '100%',
      marginBottom: 16,
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
      color: '#ffffff',
    },
    readMoreLine: {
      color: 'black',
      textDecoration: 'underline',
      letterSpacing: '1px',
      cursor: 'pointer',
      fontWeight: 'bold',
    },
    margin: {
      margin: '8px 0px 6px 18px'
    }
  });



const MenuItem = ({item,index}) => {
  const [more, setMore] = useState(true);
  const classes = useStyles(IMSpaghetti)();
  return (
    <Grid item className={classes.gridWrapper} key={index}>
          <Card elevation={0} className={classes.cardContainer}>
            <Grid container className={classes.gridContainer}>
              <Grid item xs={3} className={classes.menuWrapper}>
                <Box p={1} mb={7}>
                  <IHeart color={index < 1 ? '#F1608A' : '#FFFFFF'} />
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
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                >
                  <Box color="#7B00AB">{item.category}</Box>
                  <Box>
                    <img alt="close" src={IClose} />
                  </Box>
                </Box>
                <Box
                  ml={2}
                  mb={1}
                  fontWeight={600}
                  fontSize={16}
                  color="#0E0E0E"
                >
                  {item.productName}
                </Box>
                <Box ml={2} fontSize={12} textAlign="justify" color="#9A9A9A">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: (item.description.length > 50 && more)
                        ? `${item.description.slice(0, 50)}...`
                        : item.description,
                    }}
                  />

                  {item.description.length > 50 && <Link
                    to=''
                    style={{ color: 'black', cursor: 'pointer' }}
                    onClick={(e) => {
                      e.preventDefault()
                      setMore(!more)
                    }}
                  >
                    &nbsp;
                    <b>
                      <u>{more ? strings.show_more : strings.show_less}</u>
                    </b>
                  </Link>}
                </Box>
                <Box
                  display='flex'
                  flexDirection='row'
                  justifyContent='space-between'
                  alignItems='center'
                  className={classes.margin}
                >
                  <Box fontSize={16} textAlign='justify' color='#5E4E63'>
                    ${item.price}
                  </Box>
                  <Box>
                    <img alt='add' src={IButtonAdd} />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Grid>
  )
}

export default MenuItem

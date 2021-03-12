import React from 'react'
import { Typography, Grid, Button, Card } from '@material-ui/core'
import Wrapper from '../../shared/Wrapper'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { string } from './strings'

const View = () => {
  const classes = useStyle()
  return (
    <Wrapper title={string.menu_list} isBack spacing='26px'>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Typography variant='subtitle2' gutterBottom className={classes.bold}>
            Lorem, ipsum dolors.
          </Typography>
        </Grid>
        <Grid item xs={4} align='right'>
          <select name='cars' className={classes.select}>
            <option value='volvo'>Volvo</option>
            <option value='saab'>Saab</option>
            <option value='mercedes'>Mercedes</option>
            <option value='audi'>Audi</option>
          </select>
        </Grid>
        {Array(10).fill(10).map((item, index) => (
          <Grid item xs={12} key={index}>
            <Card className={classes.card}>
              <Grid container spacing={3}>
                <Grid item xs={4}>
                  <img
                    src='https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
                    className={classes.imgProduct}
                  />
                </Grid>
                <Grid item xs={8}>
                  <div className={classes.cardContent}>
                    <Typography gutterBottom className={classes.purple}>
                      product name
                    </Typography>
                    <Typography gutterBottom className={classes.purple}>
                      Change
                    </Typography>
                  </div>
                  <Typography variant='subtitle2' gutterBottom className={classes.bold}>
                    Lorem, ipsum dolors.
                  </Typography>
                  <Typography variant='subtitle2' gutterBottom className={classes.bold}>
                    $43
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        ))}
        <Grid item xs={12} zeroMinWidth>
          <Link to='/venue/menu/add'>
            <Button className={classes.submitBtn}>
              <Typography
                variant='subtitle2'
                className={classes.bold}
                style={{ color: 'white', textTransform: 'capitalize' }}
              >
                {string.btn_add}
              </Typography>
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Wrapper>
  )
}

const useStyle = makeStyles((theme) => ({
  card: {
    borderRadius: '10px',
    padding: '16px'
  },
  bold: {
    fontWeight: 'bold'
  },
  purple: {
    color: '#7B00AB',
    fontWeight: 600,
    fontSize: '14px',
    textTransform: 'capitalize',
    [theme.breakpoints.down('xs')] : {
      fontSize: '3.5vw'
    }
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  submitBtn: {
    backgroundColor: '#20D3C2',
    borderRadius: '12px',
    position: 'fixed',
    top: '92%',
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '56px',
    padding: '16px',
    boxShadow: '1px 1px 12px -3px',
    '&:hover': {
      backgroundColor: '#20D3C2'
    }
  },
  select: {
    position: 'relative',
    borderRadius: '10px',
    padding: '8px',
    border: '1px solid #FF3974',
    [theme.breakpoints.down('xs')] : {
      padding: '4px'
    }
  },
  imgProduct: {
    borderRadius: '20px',
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    objectPosition: '50% 50%',
    [theme.breakpoints.down('xs')] : {
      width: '100%',
      height: '80px'
    }
  }
}))

export default View

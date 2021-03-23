import React, { useRef, useEffect, useState } from 'react'
import { Typography, Grid, Button } from '@material-ui/core'
import Wrapper from '../../shared/Wrapper'
import { makeStyles } from '@material-ui/core/styles'
import { strings } from './utils'
import { InputForm, SelectOption } from './components'
import { Link } from 'react-router-dom'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'

const MenuAdd = () => {
  const [state, setState] = useState({
    name: '',
    description: '',
    category: [
      {
        id: 1,
        name: 'Dessert'
      },
      {
        id: 2,
        name: 'Sphagetti'
      },
      {
        id: 3,
        name: 'Drink'
      }
    ],
    price: '',
    picture: null,
    protein: [
      {
        id: 1,
        name: 'Vegan'
      },
      {
        id: 2,
        name: 'Meat'
      },
      {
        id: 3,
        name: 'Vegetables'
      }
    ]
  })
  const classes = useStyle()
  const [picturePreview, setPicturePriview] = useState(null)
  const inputFocus = useRef(null)

  useEffect(() => {
    if (inputFocus.current) {
      inputFocus.current.focus()
    }
  }, [])

  const onChange = event => {
    const { name, value } = event.target
    setState(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const _handleChangePicture = (event) => {
    event.preventDefault()
    setState(prevState => ({
      ...prevState,
      picture: event.target.files[0]
    }))
    setPicturePriview(URL.createObjectURL(event.target.files[0]))
  }

  return (
    <Wrapper
      title={strings.add_menu}
      image='https://source.unsplash.com/random'
      spacing='26px'
      isBack='/venue/menu/list'
    >
      <form>
        <Grid container direction='column'>
          <Grid item xs={12}>
            <InputForm
              type='text'
              name='name'
              value={state.name}
              label={strings.label_name}
              ref={inputFocus}
              onChange={onChange}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} style={{ marginBottom: 8 }}>
          <SelectOption
            label={strings.label_category}
            className={classes.label}
            data={state.category}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            gutterBottom
            className={classes.label}>
            {strings.label_desc}
          </Typography>
          <textarea
            name='description'
            rows='2' type='text'
            className={classes.input}
            ref={inputFocus}
          />
        </Grid>
        <Grid item xs={12}>
          <InputForm
            type='text'
            name='price'
            value={state.price}
            label='Price'
            ref={inputFocus}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            gutterBottom
            className={classes.label}>
            {strings.label_picture}
          </Typography>
          {picturePreview === null && (
            <Button
              onChange={_handleChangePicture}
              variant='contained'
              component='label'
              startIcon={<PhotoLibraryIcon style={{ fontSize: 100, color: '#979797' }} />}
              className={classes.btnPreview}
              disableElevation
            >
              <input
                type='file'
                name={state.picture}
                hidden
              />
            </Button>
          )}
        </Grid>
        {picturePreview !== null && (
          <>
            <div className={classes.formGroup}>
              <img
                src={picturePreview}
                alt='img-product'
                className={classes.imgPreview}
              />
            </div>
            <div className={classes.formGroup}>
              <Button
                onChange={_handleChangePicture}
                variant='contained'
                component='label'
                className={classes.btnImg}
              >
                {strings.add_img}
                <input
                  type='file'
                  name={state.picture}
                  hidden
                />
              </Button>
            </div>
          </>
        )}
        <Grid item xs={12} style={{ margin: '10px 0px 54px 0px' }}>
          <SelectOption
            label={strings.label_protein_type}
            className={classes.label}
            data={state.protein}
          />
        </Grid>
        <Grid item xs={12}>
          <Link to='/venue/menu/list'>
            <Button className={classes.submitBtn} fullWidth>
              <Typography
                variant='subtitle2'
                className={classes.bold}
                style={{ color: 'white', textTransform: 'capitalize' }}
              >
                {strings.save_menu}
              </Typography>
            </Button>
          </Link>
        </Grid>
      </form>
    </Wrapper>
  )
}

const useStyle = makeStyles((theme) => ({
  bold: {
    fontWeight: 'bold'
  },
  formGroup: {
    position: 'relative',
    marginBottom: '16px',
    width: '100%'
  },
  submitBtn: {
    backgroundColor: '#20D3C2',
    borderRadius: '12px',
    height: '48px',
    padding: '16px',
    boxShadow: '1px 1px 12px -3px',
    '&:hover': {
      backgroundColor: '#20D3C2'
    }
  },
  input: {
    background: '#f3f3f3',
    borderRadius: '10px',
    width: '100%',
    border: 0,
    outline: 0,
    boxShadow: 'none',
    padding: '12px',
    '&:focus': {
      border: '2px solid #3f51b5'
    }
  },
  select: {
    backgroundColor: '#f3f3f3',
    width: '100%',
    position: 'relative',
    borderRadius: '10px',
    padding: '16px',
    border: 'none',
    [theme.breakpoints.down('xs')]: {
      padding: '14px'
    },
    '&:focus': {
      border: '2px solid #3f51b5'
    }
  },
  imgPreview: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    objectPosition: '50% 50%',
    borderRadius: '10px',
    transition: 'opacity .3s'
  },
  inputFile: {
    width: '100%',
    height: '100px',
    backgroundColor: '#f3f3f3',
    color: '#000',
    border: '1px solid #f3f3f3',
    padding: '16px',
    borderRadius: '10px',
    '&:focus': {
      border: '2px solid #3f51b5'
    }
  },
  btnPreview: {
    width: '100%',
    height: '200px',
    background: '#f3f3f3',
    borderRadius: '10px',
    boxShadow: 'none',
    '&:focus': {
      border: '2px solid #3f51b5'
    }
  },
  btnImg: {
    border: 'none',
    padding: '10px',
    fontSize: 14,
    borderRadius: '15px',
    backgroundColor: '#4F147B',
    color: 'white'
  }
}))

export default MenuAdd

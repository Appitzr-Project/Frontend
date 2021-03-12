import React, { useRef, useEffect, useState, Fragment } from 'react'
import { Typography, Grid, Button, TextField } from '@material-ui/core'
import Wrapper from '../../shared/Wrapper'
import { makeStyles } from '@material-ui/core/styles'
import { strings } from './utils'

const MenuAdd = () => {
  const [state, setState] = useState({
    name: '',
    description: '',
    category: '',
    price: 0,
    picture: null,
    protein: ''
  })
  const [picturePreview, setPicturePriview] = useState(null)
  const classes = useStyle()
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
    event.persist()
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
      isBack
    >
      <form>
        <InputForm
          type='text'
          name='name'
          value={state.name}
          label={strings.label_name}
          ref={inputFocus}
          onChange={onChange}
          className={classes.input}
        />
        <div className={classes.formGroup}>
          <Typography
            gutterBottom
            className={classes.label}>
            {strings.label_category}
          </Typography>
          <select name='cars' className={classes.select}>
            <option value='volvo'>Volvo</option>
            <option value='saab'>Saab</option>
            <option value='mercedes'>Mercedes</option>
            <option value='audi'>Audi</option>
          </select>
        </div>
        <div className={classes.formGroup}>
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
        </div>
        <InputForm
          type='text'
          name='price'
          value={state.price}
          label='Price'
          ref={inputFocus}
          onChange={onChange}
          className={classes.input}
        />
        <div className={classes.formGroup}>
          <Typography
            gutterBottom
            className={classes.label}>
            {strings.label_picture}
          </Typography>
          {picturePreview === null && (
            <input
              type='file'
              name='picture'
              onChange={_handleChangePicture}
              className={classes.inputFile}
            />
          )}
        </div>
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
              <button
                className={classes.btnImg}
              >
                {strings.add_img}
              </button>
            </div>
          </>
        )}
        <div className={classes.formGroup}>
          <Typography
            gutterBottom
            className={classes.label}>
            {strings.label_protein_type}
          </Typography>
          <select name='cars' className={classes.select}>
            <option value='volvo'>Volvo</option>
            <option value='saab'>Saab</option>
            <option value='mercedes'>Mercedes</option>
            <option value='audi'>Audi</option>
          </select>
        </div>
        <br /><br /><br />
        <Grid item xs={12}>
          <Button className={classes.submitBtn} fullWidth>
            <Typography
              variant='subtitle2'
              className={classes.bold}
              style={{ color: 'white', textTransform: 'capitalize' }}
            >
              {strings.save_menu}
            </Typography>
          </Button>
        </Grid>
      </form>
    </Wrapper>
  )
}

const InputForm = ({
  label,
  type,
  value,
  name,
  ref,
  onChange,
  className
}) => {
  const classes = useStyle({ value })
  return (
    <div className={classes.formGroup}>
      <Typography
        gutterBottom
        className={classes.label}
      >
        {label}
      </Typography>
      <input
        name={name}
        type={type}
        className={className}
        ref={ref}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

const useStyle = makeStyles((theme) => ({
  label: {
    color: value => value !== '' ? '#464646' : '#3f51b5',
    fontSize: '16px',
    fontWeight: '400',
    [theme.breakpoints.down('xs')] : {
      fontSize: '3.5vw'
    }
  },
  bold: {
    fontWeight: 'bold'
  },
  formGroup: {
    position: 'relative',
    marginBottom: '16px'
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
    marginBottom: '8px',
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
    [theme.breakpoints.down('xs')] : {
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

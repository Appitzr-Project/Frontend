import React, { useRef, useEffect, useState } from 'react'
import { Typography, Grid, Button, Modal, Backdrop, Fade } from '@material-ui/core'
import Wrapper from '../../shared/Wrapper'
import { makeStyles } from '@material-ui/core/styles'
import { strings } from './utils'
import { InputForm } from './components'
import { Link } from 'react-router-dom'

const MenuEdit = () => {
  const [state, setState] = useState({
    name: 'Spagethi',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, sapiente.',
    category: '',
    price: '10',
    picture: null,
    protein: ''
  })
  const [picturePreview, setPicturePriview] = useState('https://source.unsplash.com/random')
  const classes = useStyle({ strings })
  const inputFocus = useRef(null)

  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open)

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
      title={strings.edit_menu}
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
            defaultValue={state.description}
          />
        </div>
        <InputForm
          type='text'
          name='price'
          value={state.price}
          label='Price'
          ref={inputFocus}
          onChange={onChange}
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
        <br /><br />
      
        <Grid item xs={12}>
          <Link to='/venue/menu/list'>
            <Button className={classes.submitBtn} fullWidth>
              <Typography
                variant='subtitle2'
                className={classes.bold}
                style={{ color: 'white', textTransform: 'capitalize' }}
              >
                {strings.update_menu}
              </Typography>
            </Button>
          </Link>
          <Button className={classes.submitBtn2} fullWidth onClick={handleToggle}>
            <Typography
              variant='subtitle2'
              className={classes.bold}
              style={{ color: 'white', textTransform: 'capitalize' }}
            >
              {strings.delete_menu}
            </Typography>
          </Button>
        </Grid>
      </form>

      <Modal
        className={classes.modal}
        open={open}
        onClose={handleToggle}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 300
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Grid container>
              <Grid container item justify='space-between'>
                <Typography className={classes.logoutText}>
                  {strings.delete_menu}
                </Typography>
                <div className={classes.Xbtn} onClick={handleToggle}>X</div>
              </Grid>

              <Grid container item justify='space-between'>
                <Typography className={classes.confirmText}>
                  {strings.modal_desc}
                </Typography>
              </Grid>

              <Grid container item justify='space-between'>
                <Button
                  variant='outlined'
                  color='inherit'
                  className={classes.cancelBtn}
                  onClick={handleToggle}
                >
                  {strings.cancel}
                </Button>
                <Button
                  variant='outlined'
                  color='inherit'
                  className={classes.okBtn}
                >
                  {strings.ok}
                </Button>
              </Grid>

            </Grid>
          </div>
        </Fade>
      </Modal>

    </Wrapper>
  )
}

const useStyle = makeStyles((theme) => ({
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
    marginBottom: '16px',
    boxShadow: '1px 1px 12px -3px',
    '&:hover': {
      backgroundColor: '#20D3C2'
    }
  },
  submitBtn2: {
    backgroundColor: '#C94130',
    borderRadius: '12px',
    height: '48px',
    padding: '16px',
    marginBottom: '16px',
    boxShadow: '1px 1px 12px -3px',
    '&:hover': {
      backgroundColor: '#C94130'
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
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width: '260px',
    backgroundColor: '#fff',
    padding: '13px',
    borderRadius: '5px',
  },
  logoutText: {
    fontSize: '18px',
    fontWeight: '600'
  },
  Xbtn: {
    fontSize: '18px',
    fontWeight: '400', 
    color: '#717171',
    cursor: 'pointer'
  },
  confirmText: {
    color: '#717171',
    fontSize: '16px',
    fontWeight: '300', 
    padding: '10px 0 20px 0'
  },

  cancelBtn: {
    backgroundColor: '#EBEBEB',
    border: '#EBEBEB',
    color: '#C1C1C1',
    width: '90px',
    height: '40px',
  },

  okBtn: {
    backgroundColor: '#FF4646',
    border: '#FF4646',
    color: '#fff',
    width: '90px',
    height: '40px',
    '&:hover': {
      backgroundColor: '#FF4646',
    }
  }
}))

export default MenuEdit

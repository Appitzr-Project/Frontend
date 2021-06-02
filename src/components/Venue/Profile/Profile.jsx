import NavBar from 'components/NavBar'
import Footer from 'components/Footer'

import { useStyles } from './ProfileStyle'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { getCultureCategoryAction } from 'redux/actions/venue.action'
import { getRefreshTokenAction } from 'redux/actions/auth.action'
import { updateVenueProfileAction, createVenueProfileAction, getVenueProfileAction } from 'redux/actions/profile.action'

const Profile = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()
  const { user: userState } = useSelector(state => state.auth)
  const idToken = userState.signInUserSession && userState.signInUserSession.idToken && userState.signInUserSession.idToken.jwtToken
  const [form, setForm] = useState({
    id: '',
    venueName: '',
    phoneNumber: userState.attributes.phone_number,
    postalCode: 0,
    mapLong: 0,
    mapLat: 0,
    bankBSB: '',
    bankName: '',
    bankAccountNo: '',
    address: '',
    cultureCategory: '',
    createdAt: ''
  })

  const [states, setStates] = useState({ cultureCategories: [], isLoading: false })
  
  const setLoading = (isLoad) => setStates({ ...states, isLoading: isLoad })

  useEffect(() => {
    getCurrentLocation()
    
    dispatch(getCultureCategoryAction(idToken))
    .then(res => {
      setStates(s => ({ ...s , cultureCategories: res.data && res.data.Items }) )
    })
    .catch(err => {
      alert('[Error on get culture categories ] ', err.message || 'An error occured')
    })

    dispatch(getVenueProfileAction(idToken))
    .then(res => {
      res.data && setForm(res.data)
    }).catch(() => false  )

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onChange = name => ev => {
    setForm({
      ...form,
      [name]: ev.target.value
    })
  }

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setForm( s => ({
        ...s,
        mapLong: position.coords.longitude,
        mapLat: position.coords.latitude
      }))
    });
  }

  const onSave = (ev) => {
    ev.preventDefault()

    if(form.id)
      updateVenue()
    else
      createNewVenue()
  }

  const createNewVenue = () => {
    setLoading(true)
    dispatch(createVenueProfileAction(idToken, { ...form }))
      .then(() => {
        refreshTokenAction()
      })
      .catch(err => {
        setLoading(false)
        alert(err.message || 'An error occured')
      })
  }

  const refreshTokenAction = () => {
    dispatch(getRefreshTokenAction())
    .then(() => {
      setLoading(false)
      history.push('/venue')
    }).catch(() => false  )    
  }

  const updateVenue = () => {
    setLoading(true)
    dispatch(updateVenueProfileAction(idToken, { ...form }))
      .then(() => {
        setLoading(false)
        history.push('/venue')
      })
      .catch(err => {
        setLoading(false)
        alert(err.message || 'An error occured')
      })
  }

  return (
    <>
      <NavBar className='header_in' />
      <main className='bg_gray' >
        <div className='container margin_60_20' >
          <div className='row justify-content-center ' >
            <div className='col-lg-8' >
              <div className={classes.box_general} >
                <h4>Profile Venue</h4>
                <hr />
                <form onSubmit={onSave} >
                  <div className="form-group">
                    <label>Name</label>
                    <input className="form-control"
                      type="text"
                      placeholder='Enter name venue' 
                      value={form.venueName}
                      onChange={onChange('venueName')} />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input className="form-control"
                      type="email"
                      placeholder='Enter your email' 
                      value={userState.attributes && userState.attributes.email}
                      readOnly />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input className="form-control"
                      type="text"
                      placeholder='Enter your phone number' 
                      value={form.phoneNumber}
                      onChange={onChange('phoneNumber')} />
                  </div>
                  <div className="form-group">
                    <label>Postal Code</label>
                    <input className="form-control"
                      type="text"
                      placeholder='Enter postal code' 
                      value={form.postalCode}
                      onChange={onChange('postalCode')} />
                  </div>
                  <div className={`form-group ${classes.fieldLocation }`}>
                    <label onClick={getCurrentLocation} >Location</label>
                    <input className="form-control"
                      type="text"
                      value={ form.mapLong + ',' + form.mapLat }
                      placeholder='Enter longitude and latitude' readOnly />
                    <i className="icon_pin_alt"></i>
                  </div>
                  <div className="form-group">
                    <label>Address</label>
                    <textarea className="form-control"
                      rows='3'
                      value={form.address}
                      onChange={onChange('address')}
                      placeholder='Enter address' >
                    </textarea>
                  </div>
                  <div className="form-group">
                    <label>Culture Category</label>
                    <select className="form-control" 
                            value={form.cultureCategory || '' }
                            onChange={onChange('cultureCategory')} >
                    <option value={-1} >Select a Category</option>
                    {states.cultureCategories.map( (c , key ) => (
                      <option value={c.slug} key={key} >{c.name}</option>
                    ))}
                    </select>
                  </div>
                  <h6>Bank Details</h6>
                  <div className="form-group">
                    <label>Bank BSB</label>
                    <input className="form-control"
                      type="text"
                      value={form.bankBSB}
                      onChange={onChange('bankBSB')}
                      placeholder='Enter bank BSB' />
                  </div>
                  <div className="form-group">
                    <label>Account Name</label>
                    <input className="form-control"
                      type="text"
                      value={form.bankName}
                      onChange={onChange('bankName')}
                      placeholder='Enter account name' />
                  </div>
                  <div className="form-group">
                    <label>Account Number</label>
                    <input className="form-control"
                      type="number"
                      value={form.bankAccountNo}
                      onChange={onChange('bankAccountNo')}
                      placeholder='Enter account number' />
                  </div>
                  <div className='text-center' >
                    <img alt="mantap" src="/src/img/QRCODE.svg" width="200" />
                  </div>
                  <div className='text-center btn-link ' >
                    Send to email
                  </div>
                  <div className='text-right'>
                    <button type='submit' className='btn_1' disabled={states.isLoading} > { states.isLoading ? 'Loading ...' : 'Save' }</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Profile
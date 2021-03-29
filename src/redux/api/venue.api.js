import Axios from 'axios'

export const getCultureCategoryApi = ( token  )=> (
    Axios.get( process.env.REACT_APP_API_URL +'venues/culture', {
        headers : {
            'Authorization': token ,
            'Content-Type': 'application/json'
        }
    }).then(res => res.data )
)

export const uploadImageAddVenueApi = (token, formData) => {
  return Axios.post( process.env.REACT_APP_API_URL +'products/venue/upload', 
      formData,
    {
      headers : {
        'Authorization': token
      }
    }).then(res => res.data )
}

export const submitNewMenuApi = ( token, payload  )=> (
  Axios.post( process.env.REACT_APP_API_URL +'products/venue', {
    ...payload,
  }, {
    headers : {
      'Authorization': token ,
      'Content-Type': 'application/json'
  }
  }).then(res => res.data )
)

export const submitEditMenuApi = ( token, payload, id  )=> (
  Axios.put( `${process.env.REACT_APP_API_URL}products/venue/${id}`, {
    ...payload,
  }, {
    headers : {
      'Authorization': token ,
      'Content-Type': 'application/json'
  }
  }).then(res => res.data )
)

export const submitDeleteMenuApi = ( token, id  )=> (
  Axios.delete( `${process.env.REACT_APP_API_URL}products/venue/${id}`, {
    headers : {
      'Authorization': token ,
      'Content-Type': 'application/json'
  }
  }).then(res => res.data )
)

export const getCurrentProductVenueApi = ( token, id  )=> (
  Axios.get( `${process.env.REACT_APP_API_URL}products/venue/${id}`, {
    headers : {
        'Authorization': token ,
        'Content-Type': 'application/json'
    }
  }).then(res => res.data )
)

export const getAllVenueList = () => (
  Axios.get(process.env.REACT_APP_API_URL+"venues").then(res => res.data)
)
  
export const getVenueById = (id) => (
  Axios.get(process.env.REACT_APP_API_URL+"venues/"+id).then(res => res.data)
)
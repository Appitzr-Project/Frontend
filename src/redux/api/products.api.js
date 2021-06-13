import Axios from "axios"

export const productsVenueList = (token) => (
  Axios.get(process.env.REACT_APP_API_URL+"products/venue", {
    headers:{
    Authorization: token
    }
  }).then(res => res.data)
)

export const getAllProductsByVenueId = (idvenue) => (
  Axios.get(process.env.REACT_APP_API_URL+`products?venueid=${idvenue}`).then(res => res.data)
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

export const submitNewMenuApi = ( token, payload  ) => (
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

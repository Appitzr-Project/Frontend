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

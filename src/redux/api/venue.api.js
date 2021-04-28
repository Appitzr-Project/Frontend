import Axios from 'axios'

export const getCultureCategoryApi = ( token  )=> (
    Axios.get( process.env.REACT_APP_API_URL +'venues/culture', {
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
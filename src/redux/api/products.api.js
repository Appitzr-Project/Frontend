import Axios from "axios"

export const productsVenueList = (token) => (
  Axios.get(process.env.REACT_APP_API_URL+"products/venue", {
    headers:{
    Authorization: token
    }
  }).then(res => res.data)
)
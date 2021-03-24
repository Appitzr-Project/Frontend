import Axios from 'axios'


export const createVenueProfileApi = ( token , payload )=> (
    Axios.post( process.env.REACT_APP_API_URL +'profile/venue', payload , {
        headers : {
            'Authorization': token ,
            'Content-Type': 'application/json'
        }
    }).then(res => res.data )
)
export const updateVenueProfileApi = ( token , payload )=> (
    Axios.put( process.env.REACT_APP_API_URL +'profile/venue', payload , {
        headers : {
            'Authorization': token ,
            'Content-Type': 'application/json'
        }
    }).then(res => res.data )
)
export const getVenueProfileApi = ( token )=> (
    Axios.get( process.env.REACT_APP_API_URL +'profile/venue', {
        headers : {
            'Authorization': token ,
            'Content-Type': 'application/json'
        }
    }).then(res => res.data )
)


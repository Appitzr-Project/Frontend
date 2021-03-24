import Axios from 'axios'


export const getCultureCategoryApi = ( token  )=> (
    Axios.get( process.env.REACT_APP_API_URL +'venues/culture', {
        headers : {
            'Authorization': token ,
            'Content-Type': 'application/json'
        }
    }).then(res => res.data )
)

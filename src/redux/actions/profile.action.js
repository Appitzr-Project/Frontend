import { createVenueProfileApi, getVenueProfileApi, updateVenueProfileApi } from "../api/profile.api"


export const createVenueProfileAction = ( idToken , profile) => {
    delete profile.id
    delete profile.createdAt
    return async () => {
        try {
            const data = await createVenueProfileApi( idToken , profile )
            return data
        } catch (error) {
            const { message } = (error.response && error.response.data) || error
            console.log('[Error Create venue profile ]', error)
            throw Error(message)
        }
    }
}

export const updateVenueProfileAction = ( idToken , profile ) => {
    delete profile.id
    delete profile.createdAt
    return async () => {
        try {
            const data = await updateVenueProfileApi( idToken , profile )
            return data
        } catch (error) {
            const { message } = (error.response && error.response.data) || error
            console.log('[Error update venue profile ]', error)
            throw Error(message)
        }
    }
}

export const getVenueProfileAction = ( idToken ) => {
    return async () => {
        try {
            const profile = await getVenueProfileApi( idToken  )
            return profile
        } catch (error) {
            const { message } = (error.response && error.response.data) || error
            console.log('[Error get culture category ]', error)
            throw Error(message)
        }
    }
}

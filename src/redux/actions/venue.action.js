import { getCultureCategoryApi } from '../api/venue.api'

export const getCultureCategoryAction = ( idToken ) => {
    return async () => {
        try {
            const cultureCategory = await getCultureCategoryApi( idToken  )
            return cultureCategory
        } catch (error) {
            console.log('[Error get culture category ]', error)
            throw Error(error.message)
        }
    }
}

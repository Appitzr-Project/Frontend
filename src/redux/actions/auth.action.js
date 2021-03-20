import { signInApi, customSignInApi, signOutApi, getCurrentUser as getCurrentUserApi } from "../api/auth.api"
import { SIGNIN , SIGNOUT } from "../types/auth.type"

export const signInAction = (username, password) => {
    return async dispatch => {
        try {
            const user = await signInApi(username, password)
            dispatch({
                type: SIGNIN,
                payload: { user }
            })
        } catch (error) {
            console.log('[Error Signin ]', error)
            throw Error(error.message)
        }
    }
}

export const getCurrentUserAction = () => {
    return async dispatch => {
        try {
            const user = await getCurrentUserApi()
            dispatch({
                type: SIGNIN,
                payload: { user }
            })
        } catch (error) {
            dispatch({ type: SIGNOUT })
        }
    }
}

export const customSignInAction = (provider) => () => {
    try {
        customSignInApi(provider)
    } catch (error) {
        console.log('[Error custom signin ]', error)
    }
}

export const signOutAction = () => async dispatch => {
    try {
        await signOutApi()
        dispatch({ type: SIGNOUT })
    } catch (error) {
        console.log('[Error signin out ]', error)
    }
}

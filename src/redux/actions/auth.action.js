import { signInApi, customSignInApi, signOutApi, getCurrentUserApi , signUpApi, confirmSignUp, resendConfirmationCodeApi, refreshTokenApi, forgotPasswordApi, createNewPasswordApi } from "../api/auth.api"
import { SIGNIN , SIGNOUT } from "../types/auth.type"

export const signInAction = (username, password) => {
    return async dispatch => {
        try {
            const { attributes , signInUserSession } = await signInApi(username, password)
            dispatch({
                type: SIGNIN,
                payload: { user : { attributes , signInUserSession } }
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
            const { attributes , signInUserSession } = await getCurrentUserApi()
            dispatch({
                type: SIGNIN,
                payload: { user : { attributes , signInUserSession } }
            })
        } catch (error) {
            console.log('[error getCurrentUserAction ]' , error )
            dispatch({ type: SIGNOUT })
            // throw Error(error.message)
        }
    }
}

export const getRefreshTokenAction = () => {
    return async dispatch => {
        try {
            const signInUserSession = await refreshTokenApi()
            dispatch({
                type: SIGNIN,
                payload: { user : { signInUserSession } }
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

export const signOutAction = () => {
    return async dispatch => {
        try {
            await signOutApi()
            dispatch({ type: SIGNOUT })
        } catch (error) {
            console.log('[Error signin out ]', error)
        }
    }
}

export const signUpAction = (attributes) => {
    return async () => {
        try {
            await signUpApi(attributes)
        } catch (error) {
            console.log('[Error Signup ]', error)
            throw Error(error.message)
        }
    }
}

export const confirmSignUpAction = ({ username , code }) => {
    return async () => {
        try {
            await confirmSignUp( username , code )
        } catch (error) {
            console.log('[Error Confirm SignUp ]', error)
            throw Error(error.message)
        }
    }
}

export const resendConfirmationCodeAction = (username) => {
    return async () => {
        try {
            await resendConfirmationCodeApi(username)
        } catch (error) {
            console.log('[Error Signup ]', error)
            throw Error(error.message)
        }
    }
}


export const forgotPasswordAction = (username) => {
    return async () => {
        try {
            return await forgotPasswordApi(username)
        } catch (error) {
            console.log('[Error Forgot Password ]', error)
            throw Error(error.message)
        }
    }
}

export const createNewPasswordAction = (username) => {
    return async () => {
        try {
            return await  createNewPasswordApi(username)
        } catch (error) {
            console.log('[Error New Password ]', error)
            throw Error(error.message)
        }
    }
}

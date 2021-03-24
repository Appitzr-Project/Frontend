import { Auth } from 'aws-amplify'


export const signUpApi = async (attributes) => (
    await Auth.signUp(attributes)
)

export const confirmSignUp = async ( username , code ) => (
      await Auth.confirmSignUp(username, code)
)

export const signInApi = async (username, password) => (
         await Auth.signIn(username, password)
)

export const customSignInApi = ( provider ) => (
    Auth.federatedSignIn({ provider })
)


export const resendConfirmationCodeApi = async ( username ) => (
        await Auth.resendSignUp(username)
)

export const getCurrentUserApi = async () => {
    return await Auth.currentAuthenticatedUser()
}

export const  signOutApi = async () => {
        await Auth.signOut();
}

export const refreshTokenApi =  () => (
    new Promise( async (resolve , reject ) => {
        const cognitoUser = await Auth.currentAuthenticatedUser()
        const session = await Auth.currentSession()
        const refreshToken = session.getRefreshToken()
        cognitoUser.refreshSession( refreshToken , (error , session ) => {
            if(error){
                reject(error)
            }else{
                resolve(session)
            }
        } )
    })
)

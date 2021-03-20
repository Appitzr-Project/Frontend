import { Auth } from 'aws-amplify'

// export const  signUp = () => {
//     try {
//         const { user } = await Auth.signUp({
//             username,
//             password,
//             attributes: {
//                 email,         
//                 phone_number,  
//             }
//         });
//         console.log(user);
//     } catch (error) {
//         console.log('error signing up:', error);
//     }
// }

// async function confirmSignUp() {
//     try {
//       await Auth.confirmSignUp(username, code);
//     } catch (error) {
//         console.log('error confirming sign up', error);
//     }
// }

export const signInApi = async (username, password) => (
         await Auth.signIn(username, password)
)

export const customSignInApi = ( provider ) => (
    Auth.federatedSignIn({ provider })
)


// async function resendConfirmationCode() {
//     try {
//         await Auth.resendSignUp(username);
//         console.log('code resent successfully');
//     } catch (err) {
//         console.log('error resending code: ', err);
//     }
// }

export const getCurrentUser = async () => {
    await Auth.currentAuthenticatedUser()
}

export const  signOutApi = async () => {
        await Auth.signOut();
}

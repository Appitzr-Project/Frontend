import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { SIGNIN , SIGNOUT } from '../types/auth.type'

const initialState = {
    user: null,
}

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['user' ]
}

export default persistReducer(persistConfig, (state = initialState, { type , payload = {} } ) => {
    switch (type) {
        case SIGNIN : {
            return {
                ...state ,
                user : payload.user
            }
        }

        case SIGNOUT : {
            return {
                ...state ,
                user : null
            }
        }

        default: return state
    }

})
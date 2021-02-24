import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const initialState = {
    user: '',
    token: null,
    isLoading: false,
    errMessage: null,
}

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token', 'user' ]
}

export default persistReducer(persistConfig, (state = initialState, action = {}) => {
    switch (action.type) {
        default: return state
    }

})
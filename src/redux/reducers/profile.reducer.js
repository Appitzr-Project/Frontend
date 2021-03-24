import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  GET_PROFILE,
  POST_PROFILE_CHANGE,
  PUT_PROFILE,
} from '../types/profile.type';

const initialState = {
  profile: null,
};

const persistConfig = {
  key: 'profile',
  storage,
  whitelist: ['profile'],
};

export default persistReducer(
  persistConfig,
  (state = initialState, { type, payload = {} }) => {
    switch (type) {
      case GET_PROFILE: {
        return {
          ...state,
          profile: payload.profile,
        };
      }
      case PUT_PROFILE: {
        return {
          ...state,
          putProfile: payload.putProfile,
        };
      }
      case POST_PROFILE_CHANGE: {
        return {
          ...state,
          postProfileChange: payload.postProfileChange,
        };
      }

      default:
        return state;
    }
  }
);

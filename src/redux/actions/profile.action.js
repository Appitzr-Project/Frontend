import {
  createVenueProfileApi,
  getVenueProfileApi,
  updateVenueProfileApi,
} from '../api/profile.api';

import axios from 'axios';
import {
  GET_PROFILE,
  POST_PROFILE_CHANGE,
  PUT_PROFILE,
} from '../types/profile.type';

export const createVenueProfileAction = (idToken, profile) => {
  delete profile.id;
  delete profile.createdAt;
  return async () => {
    try {
      const data = await createVenueProfileApi(idToken, profile);
      return data;
    } catch (error) {
      const { message } = (error.response && error.response.data) || error;
      console.log('[Error Create venue profile ]', error);
      throw Error(message);
    }
  };
};

export const updateVenueProfileAction = (idToken, profile) => {
  delete profile.id;
  delete profile.createdAt;
  return async () => {
    try {
      const data = await updateVenueProfileApi(idToken, profile);
      return data;
    } catch (error) {
      const { message } = (error.response && error.response.data) || error;
      console.log('[Error update venue profile ]', error);
      throw Error(message);
    }
  };
};

export const getVenueProfileAction = (idToken) => {
  return async () => {
    try {
      const profile = await getVenueProfileApi(idToken);
      return profile;
    } catch (error) {
      const { message } = (error.response && error.response.data) || error;
      console.log('[Error get culture category ]', error);
      throw Error(message);
    }
  };
};
const PROFILE_API = 'https://api.dev.appetizr.co/profile';

export const getProfileAction = (jwtToken) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(PROFILE_API, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });
      dispatch({
        type: GET_PROFILE,
        payload: { profile: response.data },
      });
    } catch (error) {
      console.log('[Error Get Profile ]', error);
    }
  };
};

export const putProfileAction = (jwtToken, params) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(PROFILE_API, params, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });
      dispatch({
        type: PUT_PROFILE,
        payload: { putProfile: response.data },
      });
    } catch (error) {
      console.log('[Error Put Profile ]', error);
    }
  };
};

// upload profile picture
export const postProfileChange = (jwtToken, profilePicture) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${PROFILE_API}/change`,
        profilePicture,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            'content-type': 'multipart/form-data',
          },
        }
      );
      dispatch({
        type: POST_PROFILE_CHANGE,
        payload: { postProfileChange: response.data },
      });
    } catch (error) {
      console.log('[Error Post Profile Change]', error);
    }
  };
};

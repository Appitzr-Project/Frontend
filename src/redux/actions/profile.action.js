import {
  createVenueProfileApi,
  getProfileApi,
  getVenueProfileApi,
  postProfileChangeApi,
  putProfileApi,
  updateVenueProfileApi,
} from '../api/profile.api';

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

export const getProfileAction = (jwtToken) => {
  return async () => {
    try {
      const profile = await getProfileApi(jwtToken);
      return profile;
    } catch (error) {
      console.log('[Error Get Profile ]', error);
    }
  };
};

export const putProfileAction = (jwtToken, params) => {
  delete params.email;
  return async () => {
    try {
      const putProfile = await putProfileApi(jwtToken, params);
      return putProfile;
    } catch (error) {
      console.log('[Error Put Profile ]', error);
    }
  };
};

// upload profile picture
export const postProfileChange = (jwtToken, profilePicture) => {
  return async (dispatch) => {
    try {
      const postProfileChange = await postProfileChangeApi(
        jwtToken,
        profilePicture
      );
      return postProfileChange;
    } catch (error) {
      console.log('[Error Post Profile Change]', error);
    }
  };
};

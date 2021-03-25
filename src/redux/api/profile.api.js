import Axios from 'axios';

export const createVenueProfileApi = (token, payload) =>
  Axios.post(process.env.REACT_APP_API_URL + 'profile/venue', payload, {
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
  }).then((res) => res.data);
export const updateVenueProfileApi = (token, payload) =>
  Axios.put(process.env.REACT_APP_API_URL + 'profile/venue', payload, {
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
  }).then((res) => res.data);
export const getVenueProfileApi = (token) =>
  Axios.get(process.env.REACT_APP_API_URL + 'profile/venue', {
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
  }).then((res) => res.data);

export const getProfileApi = (jwtToken) =>
  Axios.get(process.env.REACT_APP_API_URL + 'profile', {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
      'Content-Type': 'application/json',
    },
  }).then((res) => res.data);

export const putProfileApi = (jwtToken, params) =>
  Axios.put(process.env.REACT_APP_API_URL + 'profile', params, {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
      'Content-Type': 'application/json',
    },
  }).then((res) => res.data);

export const postProfileApi = (jwtToken, params) =>
  Axios.post(process.env.REACT_APP_API_URL + 'profile', params, {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
      'Content-Type': 'application/json',
    },
  }).then((res) => res.data);

// upload profile picture
export const postProfileChangeApi = (jwtToken, profilePicture) =>
  Axios.post(process.env.REACT_APP_API_URL + 'profile/change', profilePicture, {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
      'content-type': 'multipart/form-data',
    },
  }).then((res) => res.data);

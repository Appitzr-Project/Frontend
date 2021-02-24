import axios from "axios";

export const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  ResponseType: "json"
});

export const apiMiddleware = store => next => action => {
  API.interceptors.request.use(
    config => {
     
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

  API.interceptors.response.use(
    response => {
     
      return response;
    },
    error => {
      
      return Promise.reject(error);
    }
  );
  next(action);
};
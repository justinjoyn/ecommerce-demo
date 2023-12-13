import axios from 'axios';
import {API_BASE_URL} from './constants';

// Set config defaults when creating the instance
export const api = axios.create({
  baseURL: API_BASE_URL,
});

// Add a request interceptor
api.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // For eg. This is where we can add the token to the request

    return config;
  },
  function (error) {
    // Do something with request error
    // For eg. This is where we can report the request error

    return Promise.reject(error);
  },
);

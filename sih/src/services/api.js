import axios from 'axios';

const baseURL = 'http://localhost:5000/api/';

const endPoints = {
  LOGIN: 'auth/login',
  SIGNUP: 'auth/signup',
};

// Create an Axios instance with default configuration
const axiosInstance = axios.create({
  baseURL,
  withCredentials: true, // Send cookies with requests
  headers: {
    // Set any common headers here (e.g., authorization token, content-type)
    'Content-Type': 'application/json',
  },
});

export { baseURL, endPoints, axiosInstance };
import axios from 'axios';

const baseURL = 'http://localhost:5000/';

const endPoints = {
  LOGIN: 'auth/login',
  SIGNUP: 'auth/signup',
  GETGROUPS: 'groups/startsWith/:letter',
};

const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export { baseURL, endPoints, axiosInstance };
import axios from 'axios';

const baseURL = 'http://localhost:5000/api/';

const endPoints = {
  LOGIN: 'auth/login',
  SIGNUP: 'auth/signup',
  GETGROUPS: 'community/startsWith/',
  BLOGS: 'community/post/',
  FETCHNGOBYDISEASE: 'ngo/searchNGOByDisease',
  ANALYSIS: 'analysis/',
  CONTACTNGO: 'ngo/mail'
};

const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export { baseURL, endPoints, axiosInstance };
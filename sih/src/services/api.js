import axios from 'axios';

const baseURL=process.env.BACKEND_URL;

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
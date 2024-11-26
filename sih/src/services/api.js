import axios from 'axios';


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
  baseURL: process.env.REACT_APP_BACKEND_URL ,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});


export { endPoints, axiosInstance };

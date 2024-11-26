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
  baseURL: "https://elitecare.onrender.com/api/",
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});


export { endPoints, axiosInstance };

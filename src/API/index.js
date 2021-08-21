import axios from 'axios'
const url = "http://localhost:8073/api/";
//register user
export const createUser = (user) =>  axios.post(url + "useradd", user);
//validate user
export const validateUser = (user) => axios.post(url + "validate", user);
//export URL
export const baseURL = url




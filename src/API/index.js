import axios from 'axios'
const url = "http://localhost:8073/";
//register user
export const createUser = (user) =>  axios.post(url + "users", user);
//validate user
export const validateUser = (user) => axios.post(url + "validate", user);
//export URL
export const baseURL = url
//Add new Course
export const createCourse = (course) => axios.post(url + "api/course", course);
/**
 * Get Course Directly Called from the URL export.
 * **/


//till not used
//get User id
// export const getUserId = (user) => axios.post(url + "getValdatedUserId", user)
// //get user email
// export const getUserEmail = (user) => axios.post(url + "getValdatedUseremail", user)
// //get Users
// export const getUsers = () => axios.get(url + "user");


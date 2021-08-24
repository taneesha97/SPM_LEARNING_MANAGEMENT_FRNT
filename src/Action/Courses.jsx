import {ADD_COURSES, FETCH_COURSES} from "./types";

import axios from "axios";
import * as api from '../API'
export const fetchCourses = () => dispatch => {
    console.log('fetching');
    axios.get(api.baseURL + 'courses/')
        .then(response => {
            dispatch({
                type: FETCH_COURSES,
                payload: response.data
            })}
        ).catch((err) => {
        console.log(err);
    })
}

export const addCourse = (Course) => async (dispatch) => {
    console.log('creating');
    try{
        const { data } = await api.createCourse(Course);
        dispatch({type: ADD_COURSES, payload: data });
        alert("data added successfully");
    } catch (error){
        console.log(error);
    }
}

export const deleteCourse = () => async (dispatch) => {

}

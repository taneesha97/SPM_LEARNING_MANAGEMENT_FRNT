import {ADD_COURSES, DELETE_USER, FETCH_COURSES, REMOVE_COURSES} from "./types";

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
    console.log(Course);
    try{
        const { data } = await api.createCourse(Course);
        dispatch({type: ADD_COURSES, payload: data });
        alert("data added successfully");
    } catch (error){
        console.log(error);
    }
}

export const deleteCourse = (id) => dispatch => {
    axios.delete(api.baseURL + 'delete/course/'+ id)
        .then(response => {
                dispatch({
                    type: REMOVE_COURSES,
                    payload: id
                })
            }
        ).catch((err) => {
        console.log(err);
    })
}

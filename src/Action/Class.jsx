import * as api from "../API";
import {ADD_CLASS, DELETE_CLASS, GET_CLASS, UPDATE_CLASS, UPDATE_USER} from "./types";
import axios from "axios";

export const addClass = (Class) => async (dispatch) => {
    console.log('creating');
    console.log('creating',Class);
    try{
        const { data } = await api.createClass(Class);
        dispatch({type: ADD_CLASS, payload: data });
        // alert("data added successfully");
    } catch (error){
        console.log(error);
    }
}

export const getClasses = () => dispatch => {
    console.log('fetching');
    axios.get(api.baseURL + 'classes/')
        .then(response => {
            dispatch({
                type: GET_CLASS,
                payload: response.data
            })}
        ).catch((err) => {
        console.log(err);
    })
}

export const deleteClasses = (id) => dispatch => {
    console.log('creating');
    axios.delete(api.baseURL + 'deleteclass/'+ id)
        .then(response => {
                dispatch({
                    type: DELETE_CLASS,
                    payload: id
                })
            }

        ).catch((err) => {
        console.log(err);
    })
}

export const updateClass = (id, PostData) => dispatch => {
    axios.put(api.baseURL + 'class/' + id , PostData)
        .then(response => {
            console.log(response)
            if(response.status === 200){
                console.log(response.data)
                dispatch({
                    type: UPDATE_CLASS,
                    payload: response.data
                })
            }
            else{
                console.log('error123')
            }
        })
        .catch((err) => {
            console.log(err);
        })
}
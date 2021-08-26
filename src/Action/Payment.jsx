import * as api from "../API";
import {ADD_PAYMENT} from "./types";

export const addPayment = (PostData) => async (dispatch) => {
    console.log('creating');
    try{
        const { data } = await api.createPayment(PostData);
        //dispatch({type: ADD_PAYMENT, payload: data });
    } catch (error){
        console.log(error);
    }
}
import * as api from "../API";
import {ADD_ANNOUNCEMENT, ADD_CLASS} from "./types";

export const addAnnouncement = (Announcement) => async (dispatch) => {
    console.log('creating');
    console.log('creating',Announcement);
    try{
        const { data } = await api.createAnnouncement(Announcement);
        dispatch({type: ADD_ANNOUNCEMENT, payload: data });
        // alert("data added successfully");
    } catch (error){
        console.log(error);
    }
}
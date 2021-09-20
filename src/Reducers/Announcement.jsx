import {
    ADD_ANNOUNCEMENT,
    GET_ANNOUNCEMENT,
    UPDATE_ANNOUNCEMENT,
    DELETE_ANNOUNCEMENT,

} from "../Action/types";

const initState = {
    announcementDetails: {
        records: [],
        record: {},
        success: null,
        error:null
    },

    announcementRecords:[],
}


export default function (state = initState, action){
    switch (action.type) {
        case GET_ANNOUNCEMENT:
            console.log('reducer');
            return {
                ...state,
                announcementRecords: {
                    ...state.announcementRecords,
                    records: action.payload
                }
            }
        case ADD_ANNOUNCEMENT:
            console.log('reducer');
            return {
                ...state,
                announcementDetails: {
                    ...state.announcementDetails,
                    record: action.payload,
                    success: "Class inserted successfully",
                    error: null
                }
            }
        case DELETE_ANNOUNCEMENT:
            console.log('reducer');
            return {
                ...state,
                announcementDetails: {
                    ...state.announcementDetails,
                    record: state.announcementDetails.records.filter(item => item !== action.payload)
                }
            }
        case UPDATE_ANNOUNCEMENT:
            return {
                ...state,
                announcementDetails: {
                    ...state.announcementDetails,
                    record: action.payload
                }
            }
        default:
            return state;
    }
}
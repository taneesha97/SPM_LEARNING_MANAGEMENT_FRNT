import {ADD_USER, DELETE_USER,UPDATE_USER, GET_USER, FETCH_USERS} from "../Action/types";

const initialState = {
    UserDetails: {
        records: [],
        record: {}
    },
    editDetail: []
}

export default function (state = initialState, action){
    switch (action.type) {
        case FETCH_USERS:
            return {
                ...state,
                UserDetails: {
                    ...state.UserDetails,
                    records: action.payload
                }
            }
        case ADD_USER:
            console.log('reducer');
            return {
                ...state,
                UserDetails: {
                    ...state.UserDetails,
                    record: action.payload
                }
            }
        case DELETE_USER:
            console.log('reducer');
            return {
                ...state,
                UserDetails: {
                    ...state.UserDetails,
                    record: state.UserDetails.records.filter(item => item !== action.payload)
                }
            }
        case GET_USER:
            return {
                ...state,
                editDetail: action.payload
            }

        case UPDATE_USER:
            return {
                ...state,
                UserDetails: {
                    ...state.UserDetails,
                    record: action.payload
                }
            }
        default:
            return state;
    }
}
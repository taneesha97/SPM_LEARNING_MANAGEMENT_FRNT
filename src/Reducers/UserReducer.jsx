import {ADD_USER, DELETE_USER, UPDATE_USER, GET_USER, FETCH_USERS, VALID_USER} from "../Action/types";

const initialState = {
    UserDetails: {
        records: [],
        record: {},
        success: null,
        error: null
    },
    editDetail: [],
    loginUser: [],
    error: null
}

export default function (state = initialState, action){
    switch (action.type) {
        case FETCH_USERS:
            console.log('reducer');
            return {
                ...state,
                UserDetails: {
                    ...state.UserDetails,
                    records: action.payload,
                    error: action.error
                }
            }
        case ADD_USER:
            console.log('reducer');
            return {
                ...state,
                UserDetails: {
                    ...state.UserDetails,
                    record: action.payload,
                    success: "Class inserted successfully",
                    error: action.error
                }
            }
        case DELETE_USER:
            console.log('reducer');
            return {
                ...state,
                UserDetails: {
                    ...state.UserDetails,
                    record: state.UserDetails.records.data.filter(item => item !== action.payload),
                    error: action.error
                }
            }
        case GET_USER:
            return {
                ...state,
                editDetail: action.payload
            }
        case VALID_USER:
            console.log('reducer');
            console.log('reducer1 ',action.payload);
            return {
                ...state,
                loginUser: action.payload
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
import {
    ADD_CLASS,
    ADD_USER,
    DELETE_CLASS,
    DELETE_USER,
    FETCH_USERS,
    GET_CLASS,
    GET_USER, UPDATE_CLASS,
    UPDATE_USER
} from "../Action/types";

const initState = {
    classDetails: {
        records: [],
        record: {}
    },

    classRecords:[],
}

// export default (classes = [], action) => {
//     switch(action.type){
//         case 'ADD_CLASS':
//             return [...classes, action.payload];
//         case 'GET_CLASS':
//             return action.payload;
//         case "UPDATE_CLASS":
//             return action.payload;
//         case "DELETE_CLASS":
//             return action.payload;
//         default:
//             return classes;
//     }
// }

export default function (state = initState, action){
    switch (action.type) {
        case GET_CLASS:
            console.log('reducer');
            return {
                ...state,
                classRecords: {
                    ...state.classRecords,
                    records: action.payload
                }
            }
        case ADD_CLASS:
            console.log('reducer');
            return {
                ...state,
                classDetails: {
                    ...state.classDetails,
                    record: action.payload
                }
            }
        case DELETE_CLASS:
            console.log('reducer');
            return {
                ...state,
                classDetails: {
                    ...state.classDetails,
                    record: state.classDetails.records.filter(item => item !== action.payload)
                }
            }
        // case GET_CLASS:
        //     return {
        //         ...state,
        //         editDetail: action.payload
        //     }

        case UPDATE_CLASS:
            return {
                ...state,
                classDetails: {
                    ...state.classDetails,
                    record: action.payload
                }
            }
        default:
            return state;
    }
}
import {ERROR_USER} from "../Action/types";

const initialState = {};

export default function(state = initialState, action) {
    switch (action.type) {
        case ERROR_USER:
            return action.payload;
        default:
            return state;
    }
}
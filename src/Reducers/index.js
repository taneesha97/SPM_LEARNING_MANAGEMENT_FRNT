import { combineReducers } from "redux";
import courses from './courses'
import UserReducer from './UserReducer'
export default combineReducers({
    userDetails1: UserReducer,
    courses
});

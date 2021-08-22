import { combineReducers } from "redux";
import courses from './courses'
import UserReducer from './UserReducer'
import classes from './Classes'
export default combineReducers({
    userDetails1: UserReducer,
    courses,
    classes
});

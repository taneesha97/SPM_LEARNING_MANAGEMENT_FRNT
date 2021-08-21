import { combineReducers } from "redux";
import CourseReducer from './CourseReducer'
import UserReducer from './UserReducer'
export default combineReducers({
    userDetails1: UserReducer,
    CourseReducer: CourseReducer,
});

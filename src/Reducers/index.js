import { combineReducers } from "redux";
import UserDetails from './UserReducer'
import CourseReducer from './CourseReducer'
export default combineReducers({
    userDetails: UserDetails,
    CourseReducer: CourseReducer,
});

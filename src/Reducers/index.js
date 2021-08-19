import { combineReducers } from "redux";
import UserDetails from './UserReducer'
export default combineReducers({
    userDetails: UserDetails
});

export default (courses = [], action) => {
    switch(action.type){
        case 'ADD_COURSE':
            return [...courses, action.payload];
        case 'FETCH_COURSES':
            return courses;
        case "UPDATE_COURSE":
            return action.payload;
        case "DELETE_COURSE":
            return action.payload;
        default:
            return courses;
    }
}

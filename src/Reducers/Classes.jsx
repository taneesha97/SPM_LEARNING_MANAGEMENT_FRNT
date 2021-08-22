const initState = {
    classDetails: {
        records: [],
        record: {}
    },
}

export default (classes = [], action) => {
    switch(action.type){
        case 'ADD_CLASS':
            return [...classes, action.payload];
        case 'GET_CLASS':
            return action.payload;
        case "UPDATE_CLASS":
            return action.payload;
        case "DELETE_CLASS":
            return action.payload;
        default:
            return classes;
    }
}
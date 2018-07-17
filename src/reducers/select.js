function select (state={}, action){
    switch(action.type){
        case "SELECT_USER":
     
        return action.user;

        default:
        return state;
    }

}


export default select;
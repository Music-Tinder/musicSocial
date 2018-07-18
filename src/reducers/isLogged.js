function isLogged (state=false, action){
    switch(action.type){
        case "LOGGED_IN":
        return action.status;

        default:
        return state;
    }
}

export default isLogged;
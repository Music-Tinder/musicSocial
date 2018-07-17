function users(state=[], action){

    switch(action.type){
        case "LOAD_USERS":
       
       const newState=  JSON.parse(JSON.stringify(action.users));
        return newState;

        default:
        return state;
    }
}

export default users;

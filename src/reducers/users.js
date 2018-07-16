function users(state={}, action){

    switch(action.type){
        case "LOAD_USERS":
        const newState=Object.assign({},state, {users:action.users})
        return newState;

        default:
        return state;
    }
}

export default users;

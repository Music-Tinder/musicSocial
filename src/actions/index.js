export function fetchUsers(){

  return function(dispatch){
    return fetch(
      `/api/users/`
    )
      .then(response => response.json())
      .then(json => {

       dispatch(storeUsers(json));
      });


  }
}


export function storeUsers(data){

  return{
    type: "LOAD_USERS",
    users: data
  }

}

export function selectUser(user){
  return{
    type: "SELECT_USER",
    user
  }
}

export function fetchUsers(){


  return function(dispatch){
    return fetch(
      `/api/users`
    )
      .then(response => response.json())
      .then(json => {

       dispatch(storeQuestion(json));
      });


  }
}


export function storeQuestion(data){

  return{
    type: "LOAD_USERS",
    users: data
  }

}

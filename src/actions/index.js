export function fetchUsers(instrument) {
  return function(dispatch) {
    return fetch(`/api/users/${instrument}`)
      .then(response => response.json())
      .then(json => {
        dispatch(storeUsers(json));
      });
  };
}

export function storeUsers(data) {
  return {
    type: "LOAD_USERS",
    users: data
  };
}

export function selectUser(user) {
  return {
    type: "SELECT_USER",
    user
  };
}

export function logIn(status) {
  return {
    type: "LOGGED_IN",
    status
  };
}

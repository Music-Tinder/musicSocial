import { combineReducers } from 'redux';
import users from './users'
import select from './select'
import isLogged from './isLogged'



export default combineReducers({
  users,
  select,
  isLogged
});

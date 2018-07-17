import { combineReducers } from 'redux';
import users from './users'
import select from './select'



export default combineReducers({
  users,
  select
});

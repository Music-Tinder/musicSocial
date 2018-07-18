import { combineReducers } from "redux";
import users from "./users";
import select from "./select";
import isLogged from "./isLogged";
import loadVideo from "./loadVideo";

export default combineReducers({
  users,
  select,
  isLogged,
  loadVideo
});

import { connect } from "react-redux";

import Messages from "../components/Messages";
import {selectUser} from "../actions";


const mapStateToProps = state => {
  return {
    musicians: state.users,
    selected: state.select,
    isLogged: state.isLogged
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectMusician: user => dispatch(selectUser(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);

import { connect } from "react-redux";

import Messages from "../components/Messages";
import { fetchUsers, selectUser } from "../actions";

const mapStateToProps = state => {
  return {
    musicians: state.users,
    selected: state.select,
    isLogged: state.isLogged
  };
};

const mapDispatchToProps = dispatch => {
  // dispatch(fetchUsers());

  return {
    getMusicians: () => dispatch(fetchUsers()),
    selectMusician: user => dispatch(selectUser(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);

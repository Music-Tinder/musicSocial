import { connect } from "react-redux";

import Messages from "../components/Messages";
import { fetchUsers } from "../actions";

const mapStateToProps = state => {
  return {
    musicians: state.users,
    selected: state.select,
    isLogged: state.isLogged
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMusicians: (instrument) => dispatch(fetchUsers(instrument))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);

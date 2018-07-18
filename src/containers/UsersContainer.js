import { connect } from "react-redux";

import Users from "../components/Users";
import { fetchUsers, loadVideo } from "../actions";

const mapStateToProps = (state, ownProps) => {
  return {
    musicians: state.users,
    instrument: ownProps.instrument,
    selected: state.select,
    isLogged: state.isLogged,
    loadVideo: state.loadVideo
  };
};

const mapDispatchToProps = dispatch => {
  dispatch(fetchUsers());

  return {
    getMusicians: () => dispatch(fetchUsers())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);

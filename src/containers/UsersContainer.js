import { connect } from "react-redux";
import Users from "../components/Users";
import { fetchUsers, selectUser } from "../actions";

const mapStateToProps = (state, ownProps) => {
  return {
    musicians: state.users,
    instrument: ownProps.instrument,
    selected: state.select,
    isLogged: state.isLogged
  };
};

const mapDispatchToProps = dispatch => {
  dispatch(fetchUsers());
  return {
    getMusicians: () => dispatch(fetchUsers()),
    selectMusician: user => dispatch(selectUser(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);

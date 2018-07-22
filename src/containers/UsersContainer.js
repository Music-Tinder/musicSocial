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
  return {
    getMusicians: (instrument) => dispatch(fetchUsers(instrument)),
    selectMusician: user => dispatch(selectUser(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);

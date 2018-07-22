import { connect } from "react-redux";
import Users from "../components/Users";
import { fetchUsers} from "../actions";

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
    getMusicians: (instrument) => dispatch(fetchUsers(instrument))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);

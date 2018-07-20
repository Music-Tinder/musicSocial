import { connect } from "react-redux";

import Posts from "../components/Posts";
import { fetchUsers } from "../actions";

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
    getMusicians: () => dispatch(fetchUsers())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
